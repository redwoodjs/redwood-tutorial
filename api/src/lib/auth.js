import { AuthenticationError, ForbiddenError } from '@redwoodjs/graphql-server'
import { parseJWT } from '@redwoodjs/api'
import { logger } from 'src/lib/logger'
/**
 * getCurrentUser returns the user information together with
 * an optional collection of roles used by requireAuth() to check
 * if the user is authenticated or has role-based access
 *
 * @param decoded - The decoded access token containing user info and JWT claims like `sub`
 * @param { token, SupportedAuthTypes type } - The access token itself as well as the auth provider type
 * @param { APIGatewayEvent event, Context context } - An object which contains information from the invoker
 * such as headers and cookies, and the context information about the invocation such as IP Address
 *
 * @see https://github.com/redwoodjs/redwood/tree/main/packages/auth for examples
 */
export const getCurrentUser = async (
  decoded,
  { _token, _type },
  { _event, _context }
) => {
  if (!decoded) {
    logger.warn('Missing decoded user')
    return null
  }

  const { roles } = parseJWT({ decoded })

  if (roles) {
    return { ...decoded, roles }
  }

  return { ...decoded }
}

//Taken from: https://redwoodjs.com/cookbook/role-based-access-control-rbac#how-to-code-examples
/**
 * Use requireAuth in your services to check that a user is logged in,
 * whether or not they are assigned a role, and optionally raise an
 * error if they're not.
 *
 * @param {string=} roles - An optional role or list of roles
 * @param {array=} roles - An optional list of roles

 * @example
 *
 * // checks if currentUser is authenticated
 * requireAuth()
 *
 * @example
 *
 * // checks if currentUser is authenticated and assigned one of the given roles
 * requireAuth({ roles: 'editor' })
 * requireAuth({ roles: ['admin', 'author', 'publisher'] })
 */
export const requireAuth = ({ roles } = {}) => {
  if (!context.currentUser) {
    throw new AuthenticationError("You don't have permission to do that.")
  }

  if (
    typeof roles !== 'undefined' &&
    typeof roles === 'string' &&
    !context.currentUser.roles?.includes(roles)
  ) {
    throw new ForbiddenError("You don't have access to do that.")
  }

  if (
    typeof roles !== 'undefined' &&
    Array.isArray(roles) &&
    !context.currentUser.roles?.some((role) => roles.includes(role))
  ) {
    throw new ForbiddenError("You don't have access to do that.")
  }
}
