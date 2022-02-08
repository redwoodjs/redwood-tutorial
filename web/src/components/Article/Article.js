import { Link, routes } from '@redwoodjs/router'

const Article = ({ post }) => {
  return (
    <article>
      <header>
        <h2 className="text-xl text-blue-700 font-semibold">
          <Link to={routes.Article({ id: post.id })}>{post.title}</Link>
        </h2>
      </header>
      <div className="mt-2 text-gray-900 font-light">{post.body}</div>
    </article>
  )
}

export default Article
