import { render } from '@redwoodjs/testing/web'

import AboutPage from './AboutPage'

describe('AboutPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AboutPage />)
    }).not.toThrow()
  })
})
