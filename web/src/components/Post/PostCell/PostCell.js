import Post from 'src/components/Post/Post'

export const QUERY = gql`
  query FindPostById($id: Int!) {
    post: adminPost(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Post not found</div>

export const Success = ({ post }) => {
  return <Post post={post} />
}
