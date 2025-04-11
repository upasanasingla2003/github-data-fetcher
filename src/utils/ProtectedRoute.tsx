import { ProtectedRouteType, ROUTES } from '@common'
import { useSelector } from 'react-redux'
import { RootState } from '@redux'
import { Navigate } from 'react-router-dom'

/**
 * A component that wraps protected routes and restricts access based on authentication status.
 * @param {ProtectedRouteType} props - The component props
 * @param {ReactNode} props.children - The child elements to be rendered inside the ProtectedRoute component
 * @returns {JSX.Element} The children components wrapped inside the ProtectedRoute component
 */
export const ProtectedRoute = ({ children }: ProtectedRouteType) => {
    const { user } = useSelector((state: RootState) => state.auth)
    if (!user) {
        return <Navigate to={ROUTES.LOGIN} replace />
    }
    return <>{children}</>
}
