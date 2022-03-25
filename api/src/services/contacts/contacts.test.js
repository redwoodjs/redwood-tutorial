import {
  contacts,
  contact,
  createContact,
  updateContact,
  deleteContact,
} from './contacts'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('contacts', () => {
  scenario('returns all contacts', async (scenario) => {
    const result = await contacts()

    expect(result.length).toEqual(Object.keys(scenario.contact).length)
  })

  scenario('returns a single contact', async (scenario) => {
    const result = await contact({ id: scenario.contact.john.id })

    expect(result).toEqual(scenario.contact.john)
  })

  scenario('creates a contact', async () => {
    const result = await createContact({
      input: {
        name: 'Jane Doe',
        email: 'jane@anonymous.com',
        message: 'RedwoodJS is the best',
      },
    })

    expect(result.name).toEqual('Jane Doe')
    expect(result.email).toEqual('jane@anonymous.com')
    expect(result.message).toEqual('RedwoodJS is the best')
  })

  scenario('updates a contact', async (scenario) => {
    const original = await contact({ id: scenario.contact.john.id })
    const result = await updateContact({
      id: original.id,
      input: { name: 'Johnathan Doe' },
    })

    expect(result.name).toEqual('Johnathan Doe')
  })

  scenario('deletes a contact', async (scenario) => {
    const original = await deleteContact({ id: scenario.contact.john.id })
    const result = await contact({ id: original.id })

    expect(result).toEqual(null)
  })
})
