import { render, screen } from '@redwoodjs/testing'

import BlogPost from './BlogPost'

describe('BlogPost', () => {
  it('renders a blog post', () => {
    const post = {
      id: 1,
      title: 'First post',
      body: 'Neutra tacos hot chicken prism raw denim...',
      createdAt: new Date().toISOString(),
    }
    render(<BlogPost post={post} />)

    expect(screen.getByText(post.title)).toBeInTheDocument()
    expect(screen.getByText(post.body)).toBeInTheDocument()
  })
})
