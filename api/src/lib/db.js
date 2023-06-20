// See https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/constructor
// for options.

import { PrismaClient } from '@prisma/client'
import { withPolicy } from '@zenstackhq/runtime'

import { emitLogLevels, handlePrismaLogging } from '@redwoodjs/api/logger'

import { logger } from './logger'

/*
 * Instance of the Prisma Client
 */
export const db = new PrismaClient({
  log: emitLogLevels(['info', 'warn', 'error']),
})

/*
 * Returns ZenStack wrapped Prisma Client with access policies enabled.
 */
export function authDb() {
  console.log('Context User:', context.currentUser)
  return withPolicy(db, { user: context.currentUser })
}

handlePrismaLogging({
  db,
  logger,
  logLevels: ['info', 'warn', 'error'],
})
