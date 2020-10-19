import BlogPost from './BlogPost'

export const generated = () => {
  return (
    <BlogPost
      post={{
        id: 1,
        title: 'First Post',
        body: 'Neutra tacos hot chicken prism raw denim...',
      }}
    />
  )
}

export default { title: 'Components/BlogPost' }
