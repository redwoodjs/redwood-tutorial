import HomePage from './HomePage'
import { standard as posts } from 'src/components/BlogPostsCell/BlogPostsCell.mock'

export const generated = () => {
  mockGraphQLQuery('BlogPostsQuery', () => {
    return posts()
  })

  return <HomePage />
}

export default { title: 'Pages/HomePage' }
