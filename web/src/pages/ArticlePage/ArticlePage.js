import { MetaTags } from '@redwoodjs/web'
import BlogPostCell from 'src/components/BlogPostCell'

const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <BlogPostCell id={id} />
    </>
  )
}

export default ArticlePage
