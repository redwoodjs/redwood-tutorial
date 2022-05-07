import BlogLayout from './BlogLayout'

export const loggedIn = () => {
  mockCurrentUser({ email: 'rob@redwoodjs.com', isAuthenticated: true })

  return <BlogLayout />
}

export const loggedOut = () => {
  return <BlogLayout />
}

export default { title: 'Layouts/BlogLayout' }
