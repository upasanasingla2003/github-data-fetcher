import {
    Home,
    LoginPage,
    ProfilePage,
    UserDetailPage,
    NotFoundPage
} from '@pages'
import { ProtectedRoute } from '@utils'
import { createBrowserRouter } from 'react-router-dom'
import { App } from '../App'
import { ROUTES } from '@common'

const { HOME, LOGIN, USER_DETAILS, PROFILE_PAGE, NOT_FOUND } = ROUTES

/**
 * The router configuration for the application.
 * This creates a browser router with different route paths and corresponding elements (pages).
 * The router defines the routes for:
 * - Home page
 * - Login page
 * - User details page
 * - Profile page (protected by a ProtectedRoute)
 *
 * @returns {BrowserRouter} The configured browser router with nested routes.
 */
export const router = createBrowserRouter([
    {
        path: HOME,
        element: <App />,
        children: [
            { path: HOME, element: <Home /> },
            {
                path: LOGIN,
                element: <LoginPage />
            },
            { path: USER_DETAILS, element: <UserDetailPage /> },
            {
                path: PROFILE_PAGE,
                element: (
                    <ProtectedRoute>
                        <ProfilePage />
                    </ProtectedRoute>
                )
            },
            {
                path: NOT_FOUND,
                element: <NotFoundPage />
            }
        ]
    }
])
