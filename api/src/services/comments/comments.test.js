import { comments, createComment } from './comments'
import { db } from 'src/lib/db'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('comments', () => {
  scenario('returns all comments for a single post from the database', async (scenario) => {
    const result = await comments({ postId: scenario.comment.jane.postId })
    const post = await db.post.findUnique({
      where: { id: scenario.comment.jane.postId },
      include: { comments: true },
    })
    expect(result.length).toEqual(post.comments.length)

  })

  scenario('postOnly', 'creates a new comment', async (scenario) => {
    const comment = await createComment({
      input: {
        name: 'Billy Bob',
        body: 'What is your favorite tree bark?',
        post: {
          connect: { id: scenario.post.bark.id },
        },
      },
    })

    expect(comment.name).toEqual('Billy Bob')
    expect(comment.body).toEqual('What is your favorite tree bark?')
    expect(comment.postId).toEqual(scenario.post.bark.id)
    expect(comment.createdAt).not.toEqual(null)
  })

})
