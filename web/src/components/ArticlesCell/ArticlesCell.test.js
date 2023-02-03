import { render, screen, within } from '@redwoodjs/testing'

import { Loading, Empty, Failure, Success } from './ArticlesCell'
import { standard } from './ArticlesCell.mock'

describe('ArticlesCell', () => {
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
    const articles = standard().articles
    render(<Success articles={articles} />)

    articles.forEach((article) => {
      const truncatedBody = article.body.substring(0, 10)
      const matchedBody = screen.getByText(truncatedBody, { exact: false })
      const ellipsis = within(matchedBody).getByText('...', { exact: false })

      expect(screen.getByText(article.title)).toBeInTheDocument()
      expect(screen.queryByText(article.body)).not.toBeInTheDocument()
      expect(matchedBody).toBeInTheDocument()
      expect(ellipsis).toBeInTheDocument()
    })
  })
})