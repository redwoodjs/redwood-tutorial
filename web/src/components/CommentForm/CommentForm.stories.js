// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <CommentForm {...args} />
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

export default {
  title: 'Components/CommentForm',
  component: CommentForm,
}
