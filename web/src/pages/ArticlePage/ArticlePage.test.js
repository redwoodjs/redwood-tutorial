import { render } from '@redwoodjs/testing'

import ArticlePage from './ArticlePage'

describe('ArticlePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArticlePage />)
    }).not.toThrow()
  })
})
