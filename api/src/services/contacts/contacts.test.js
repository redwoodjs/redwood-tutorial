import { contacts } from './contacts'

describe('contacts', () => {
  scenario('returns a list of contacts', async (scenario) => {
    const list = await contacts()

    expect(list.length).toEqual(Object.keys(scenario.contact).length)
    expect(list[0].email).toEqual(scenario.contact.john.email)
  })
})
