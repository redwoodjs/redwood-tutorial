import Comment from './Comment'

export const defaultView = () => {
  return (
    <Comment
      comment={{
        name: 'Rob Cameron',
        body: 'This is the first comment!',
        createdAt: '2020-01-01T12:34:56Z',
      }}
    />
  )
}

export const moderatorView = () => {
  mockCurrentUser({
    roles: 'moderator',
  })

  return (
    <Comment
      comment={{
        name: 'Rob Cameron',
        body: 'This is the first comment!',
        createdAt: '2020-01-01T12:34:56Z',
      }}
    />
  )
}

export default { title: 'Components/Comment' }
