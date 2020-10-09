import BlogPostPage from './BlogPostPage'
import { standard as post } from 'src/components/BlogPostCell/BlogPostCell.mock'

export const generated = () => {
  mockGraphQLQuery('BlogPostsQuery', () => {
    return post()
  })

  return <BlogPostPage />
}

export default { title: 'Pages/BlogPostPage' }
