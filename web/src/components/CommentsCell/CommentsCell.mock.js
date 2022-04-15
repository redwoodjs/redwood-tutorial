// Define your own mock data here:
export const standard = () => ({
  // What's this standard thing? Think of it as the standard, default mock if you don't do anything else. We would have loved to use the name "default" but that's already a reserved word in Javascript!
  comments: [
    {
      id: 1,
      name: 'Rob Cameron',
      body: 'First comment',
      postId: 1,
      createdAt: '2020-01-02T12:34:56Z',
    },
    {
      id: 2,
      name: 'David Price',
      body: 'Second comment',
      postId: 2,
      createdAt: '2020-02-03T23:00:00Z',
    },
  ],
})
