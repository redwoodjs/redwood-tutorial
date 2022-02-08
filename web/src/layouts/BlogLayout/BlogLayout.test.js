import { render, screen, waitFor } from '@redwoodjs/testing'

import BlogLayout from './BlogLayout'

const EMAIL = 'rob@redwoodjs.com'
const loggedIn = () => {
  mockCurrentUser({ email: EMAIL })
}
const loggedOut = () => {
  mockCurrentUser(null)
}

describe('BlogLayout', () => {
  it('displays a Login link when not logged in', async () => {
    loggedOut()
    render(<BlogLayout />)

    await waitFor(() => expect(screen.getByText('Login')).toBeInTheDocument())
  })

  it('displays a Logout link when logged in', async () => {
    loggedIn()
    render(<BlogLayout />)

    await waitFor(() => expect(screen.getByText('Logout')).toBeInTheDocument())
  })

  it("displays a logged in user's email address", async () => {
    loggedIn()
    render(<BlogLayout />)

    await waitFor(() => expect(screen.getByText(EMAIL)).toBeInTheDocument())
  })
})
