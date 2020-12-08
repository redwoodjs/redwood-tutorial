import { posts, post } from './posts'

describe('posts', () => {
  scenario('returns a list of posts', async (scenario) => {
    const list = await posts()

    expect(list.length).toEqual(Object.keys(scenario.post).length)
    expect(list[0].title).toEqual(scenario.post.first.title)
  })

  scenario('returns a single post by ID', async (scenario) => {
    const record = await post({ id: scenario.post.first.id })

    expect(record.title).toEqual(scenario.post.first.title)
  })
})
