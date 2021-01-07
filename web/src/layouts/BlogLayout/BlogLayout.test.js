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
  it('displays a Log In link when not logged in', async () => {
    loggedOut()
    render(<BlogLayout />)

    await waitFor(() => expect(screen.getByText('Log In')).toBeInTheDocument())
  })

  it('displays a Log Out link when logged in', async () => {
    loggedIn()
    render(<BlogLayout />)

    await waitFor(() => expect(screen.getByText('Log Out')).toBeInTheDocument())
  })

  it("displays a logged in user's email address", async () => {
    loggedIn()
    render(<BlogLayout />)

    await waitFor(() => expect(screen.getByText(EMAIL)).toBeInTheDocument())
  })
})
