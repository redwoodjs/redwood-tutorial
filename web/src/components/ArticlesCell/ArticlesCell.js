import Article from 'src/components/Article'

export const QUERY = gql`
  query BlogPostsQuery {
    articles: posts {
      id
      title
      body
      createdAt
      user {
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ articles }) => {
  return (
    <div className="space-y-10">
      {articles.map((article) => (
        <Article article={article} key={article.id} summary={true} />
      ))}
    </div>
  )
}
