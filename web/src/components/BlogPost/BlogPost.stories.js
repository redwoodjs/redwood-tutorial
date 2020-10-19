import BlogPost from './BlogPost'

export const generated = () => {
  return (
    <BlogPost
      post={{
        id: 1,
        title: 'First Post',
        body: 'Neutra tacos hot chicken prism raw denim...',
        createdAt: '2020-01-01T12:34:56Z',
      }}
    />
  )
}

export default { title: 'Components/BlogPost' }
