import BlogLayout from './BlogLayout'

export const loggedIn = (args) => {
  mockCurrentUser({ id: 4, email: 'rob@redwoodjs.com' })

  return <BlogLayout {...args} />
}

export const loggedOut = (args) => {
  return <BlogLayout {...args} />
}

export default {
  title: 'Layouts/BlogLayout',
  component: BlogLayout,
}
