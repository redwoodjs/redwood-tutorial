import Comment from './Comment'

export const defaultView = () => {
  return (
    <Comment
      comment={{
        name: 'Rob Camerina',
        body: 'This is the first awesome comment!!!',
        createdAt: '2020-01-01T12:34:56Z',
      }}
    />
  )
}

export const moderatorView = () => {
  mockCurrentUser({
    // NOTE: Similar to mockGraphQLQuery() and mockGraphQLMutation(), mockCurrentUser() is a global available in Storybook automatically, no need to import.
    roles: 'moderator',
  })

  return (
    <div className="m-4">
      <Comment
        comment={{
          name: 'Rob Cameron',
          body: 'This is the first comment!',
          createdAt: '2020-01-01T12:34:56Z',
          postId: 1,
        }}
      />
    </div>
  )
}

export default { title: 'Components/Comment' }
