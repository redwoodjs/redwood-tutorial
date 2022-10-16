import type { Prisma, Contact } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ContactCreateArgs>({
  contact: {
    john: {
      data: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        message: 'I love RedwoodJS',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Contact, 'contact'>
