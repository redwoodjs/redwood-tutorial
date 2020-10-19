import { render } from '@redwoodjs/testing'

import BlogPost from './BlogPost'

describe('BlogPost', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogPost post={{ id: 1, name: 'John Doe', body: 'Body' }} />)
    }).not.toThrow()
  })
})
