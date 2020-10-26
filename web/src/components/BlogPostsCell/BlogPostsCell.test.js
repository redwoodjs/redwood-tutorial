import { render, screen } from '@redwoodjs/testing'
import { Loading, Empty, Failure, Success } from './BlogPostsCell'
import { standard } from './BlogPostsCell.mock'

describe('BlogPostsCell', () => {
  test('Loading renders successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  test('Empty renders successfully', async () => {
    expect(() => {
      render(<Empty />)
    }).not.toThrow()
  })

  test('Failure renders successfully', async () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />)
    }).not.toThrow()
  })

  test('Success renders successfully', async () => {
    const posts = standard().posts
    render(<Success posts={posts} />)

    expect(screen.getByText(posts[0].title)).toBeInTheDocument()
    expect(screen.getByText(posts[0].body)).toBeInTheDocument()
    expect(screen.getByText(posts[1].title)).toBeInTheDocument()
    expect(screen.getByText(posts[1].body)).toBeInTheDocument()
  })
})
