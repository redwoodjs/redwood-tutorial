# Redwood Tutorial App

Follow these steps to get started with ZenStack:

1. Prepare project

    Install CLI

    ```bash
    cd api
    yarn add -D zenstack
    yarn add @zenstackhq/runtime
    ```

    Bootstrap ZModel from `schema.prisma`

    ```bash
    cp db/schema.prisma ./schema.zmodel
    ```

2. Prepare model

    Add the following section to `schema.zmodel` to output the generated Prisma schema to the default location of Redwood:

    ```
    plugin prisma {
      provider = '@core/prisma'
      output = './db/schema.prisma'
    }
    ```

    Run `zenstack generate` and verify that `db/schema.prisma` is updated.

    ```bash
    yarn zenstack generate
    ```

3. Add access policies

    Note the added `@@allow` rules (all operations are denied by default).

    ```prisma
    model Post {
      id        Int      @id @default(autoincrement())
      title     String
      body      String
      comments  Comment[]
      user      User     @relation(fields: [userId], references: [id])
      userId    Int
      createdAt DateTime @default(now())

      @@allow('read', true)
      @@allow('all', auth() == user)
      @@allow('all', auth() != null && auth().roles == 'admin')
    }

    model Contact {
      id        Int      @id @default(autoincrement())
      name      String
      email     String
      message   String
      createdAt DateTime @default(now())

      @@allow('create', true)
    }

    model User {
      id                  Int @id @default(autoincrement())
      name                String?
      email               String @unique
      hashedPassword      String
      salt                String
      resetToken          String?
      resetTokenExpiresAt DateTime?
      roles               String @default("moderator")
      posts               Post[]

      @@allow('create,read', true)
      @@allow('update,delete', auth() == this)
    }

    model Comment {
      id        Int      @id @default(autoincrement())
      name      String
      body      String
      post      Post     @relation(fields: [postId], references: [id])
      postId    Int
      createdAt DateTime @default(now())

      @@allow('read,create', true)
      @@allow('delete', auth() != null && auth().roles == 'moderator')
    }

    ```

    Rerun generation and migrate the database.

    ```bash
    yarn zenstack generate
    yarn rw prisma migrate dev
    ```

4. Switch to relying on access policies for authorization

    Remove authorization from `api/src/services/comments.js`

    ```diff
    export const deleteComment = ({ id }) => {
        - requireAuth({ roles: 'moderator' })
        return authDb().comment.delete({ where: { id } })
    }
    ```

    and `api/src/graphql/comments.sdl.js`

    ```diff
    type Mutation {
        - createComment(input: CreateCommentInput!): Comment! @skipAuth
        - deleteComment(id: Int!): Comment! @requireAuth(roles: "moderator")
        + createComment(input: CreateCommentInput!): Comment! @skipAuth
        + deleteComment(id: Int!): Comment! @skipAuth
    }
    ```

    Change UI to allow everyone to delete comments: `web/src/components/Comment/Comment.js`.

    ```diff
    - {hasRole('moderator') && (
        <button
          type="button"
          onClick={moderate}
          className="absolute bottom-2 right-2 bg-red-500 text-xs rounded text-white px-2 py-1"
        >
          Delete
        </button>
    -)}
    ```

5. Test it

    Now if you delete a comment with a moderator role, it should succeed. A failure will be generated for other roles.

    The error thrown is of type `PrismaClientKnownRequestError`. It seems by default Redwood's GraphQL server captures it and returns a generic error message. Need to figure out how to set up a global error handler to turn it into a proper "Forbidden" error.
