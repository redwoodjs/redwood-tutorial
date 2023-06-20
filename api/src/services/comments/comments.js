import { authDb } from 'src/lib/db'

export const comments = ({ postId }) => {
  return authDb().comment.findMany({ where: { postId } })
}

export const comment = ({ id }) => {
  return authDb().comment.findUnique({
    where: { id },
  })
}

export const createComment = ({ input }) => {
  return authDb().comment.create({
    data: input,
  })
}

export const deleteComment = ({ id }) => {
  // instead of checking roles explicitly, we now rely on the
  // access policies to authorize the operation
  //
  //     requireAuth({ roles: 'moderator' })
  //
  return authDb().comment.delete({
    where: { id },
  })
}

export const Comment = {
  post: (_obj, { root }) => {
    return authDb()
      .comment.findUnique({ where: { id: root?.id } })
      .post()
  },
}
