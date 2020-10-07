import { Link, routes } from '@redwoodjs/router'
import BlogPost from 'src/components/BlogPost'

export const QUERY = gql`
  query BlogPostsQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return (
    <div className="-mt-12">
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  )
}
