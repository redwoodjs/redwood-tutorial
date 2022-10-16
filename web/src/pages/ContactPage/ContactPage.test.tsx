import { render } from '@redwoodjs/testing/web'

import ContactPage from './ContactPage'

describe('ContactPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContactPage />)
    }).not.toThrow()
  })
})
