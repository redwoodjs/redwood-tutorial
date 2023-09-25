import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const BlogLayout = ({ children }) => {
  const { logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <Toaster />
      <header className="relative flex justify-between items-center py-4 px-8 bg-blue-700 text-white">
        <h1 className="text-5xl font-semibold tracking-tight">
          <Link
            className="text-blue-400 hover:text-blue-100 transition duration-100"
            to={routes.home()}
          >
            Redwood Blog
          </Link>
        </h1>
        <nav>
          <ul className="relative flex items-center font-light">
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.about()}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.contact()}
              >
                Contact
              </Link>
            </li>
            <li>
              {isAuthenticated ? (
                <div>
                  <button type="button" onClick={logOut} className="py-2 px-4">
                    Logout
                  </button>
                </div>
              ) : (
                <Link to={routes.login()} className="py-2 px-4">
                  Login
                </Link>
              )}
            </li>
          </ul>
          {isAuthenticated && (
            <div className="absolute bottom-1 right-0 mr-12 text-xs text-blue-300">
              {currentUser.email}
            </div>
          )}
        </nav>
      </header>
      <main className="max-w-4xl mx-auto p-12 bg-white shadow rounded-b">
        {children}
      </main>
    </>
  )
}

export default BlogLayout
