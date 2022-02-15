import { AuthenticationError, ForbiddenError } from '@redwoodjs/graphql-server'
import { db } from './db'

export const getCurrentUser = async (session) => {
  return await db.user.findUnique({
    where: { id: session.id },
    select: { id: true, email: true, roles: true },
  })
}

export const isAuthenticated = () => {
  return !!context.currentUser
}

export const hasRole = ({ roles }) => {
  if (!isAuthenticated()) {
    return false
  }

  if (roles) {
    if (Array.isArray(roles)) {
      return context.currentUser.roles?.some((r) => roles.includes(r))
    }

    if (typeof roles === 'string') {
      return context.currentUser.roles?.includes(roles)
    }

    // roles not found
    return false
  }

  return true
}

export const requireAuth = ({ roles }) => {
  if (!isAuthenticated()) {
    throw new AuthenticationError("You don't have permission to do that.")
  }

  if (!hasRole({ roles })) {
    throw new ForbiddenError("You don't have access to do that.")
  }
}
