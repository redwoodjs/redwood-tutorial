// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import CommentForm from './CommentForm'

export const generated = () => {
  mockGraphQLMutation('CreateCommentMutation', (variables, { ctx }) => {
    const id = Math.floor(Math.random() * 1000)
    ctx.delay(1000)

    return {
      createComment: {
        id,
        name: variables.input.name,
        body: variables.input.body,
        createdAt: new Date().toISOString(),
      },
    }
  })

  return <CommentForm />
}

export default { title: 'Components/CommentForm' }