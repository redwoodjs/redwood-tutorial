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
      const truncatedBody = article.body.substring(0, 10) //containing the first 10 characters of the post body
      const matchedBody = screen.getByText(truncatedBody, { exact: false }) // Search through the rendered HTML on the screen and find the HTML element that contains the truncated body (note the { exact: false } here, as normally the exact text, and only that text, would need to be present, but in this case there's probably more than just the 10 characters)
      const ellipsis = within(matchedBody).getByText('...', { exact: false }) // find ..., again without an exact match

      expect(screen.getByText(article.title)).toBeInTheDocument() // find the title of the article in the page
      expect(screen.queryByText(article.body)).not.toBeInTheDocument() // the full text of the body shouldn't be present
      expect(matchedBody).toBeInTheDocument() // the truncated text should be present
      expect(ellipsis).toBeInTheDocument() // the ellipsis should be present
    })
  })
})
