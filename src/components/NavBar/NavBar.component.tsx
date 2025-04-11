import { StyledHeaderBox, StyledHeader } from './NavBar.styles'
import { useNavigate, useLocation } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login'
import { EachUserType, flexRowStart, ROUTES, StyledButton, User } from '@common'
import { Link, Box } from '@mui/material'

/**
 * Navigation bar component for the application.
 * Displays a GitHub logo, a search link, and a login/profile button.
 *
 * @component
 * @param {User | undefined} props.user - The authenticated user, or undefined if not logged in.
 * @returns {JSX.Element} The rendered NavBar component.
 */
export const NavBar: React.FC<EachUserType<User>> = ({ user }) => {
    /**
     * Hook for navigating between routes.
     * Used to navigate to the login page when the login button is clicked.
     */
    const navigate = useNavigate()
    const location = useLocation()

    /**
     * Handles the onClick event to navigate to the appropriate page.
     * If the user is undefined (not logged in), it redirects to the login page.
     * Otherwise, it redirects to the profile page.
     */
    function handleOnClick() {
        if (user === undefined) {
            navigate(ROUTES.LOGIN)
        } else {
            navigate(ROUTES.PROFILE_PAGE)
        }
    }

    return (
        <StyledHeader>
            <StyledHeaderBox>
                <Link href={ROUTES.HOME} sx={{ display: 'inline-block' }}>
                    <Box
                        component="img"
                        src="/GithubLogo.png"
                        alt="GitHub Logo"
                        sx={{ width: '50px', height: '50px' }}
                    />
                </Link>
                <Box sx={{ ...flexRowStart, gap: '40px' }}>
                    {location.pathname !== ROUTES.HOME && (
                        <Link
                            href={ROUTES.HOME}
                            sx={{ textDecorationLine: 'none' }}
                        >
                            Search
                        </Link>
                    )}
                    {location.pathname !== ROUTES.LOGIN && (
                        <StyledButton
                            variant="contained"
                            color="primary"
                            title="Click to Login"
                            onClick={() => handleOnClick()}
                            startIcon={<LoginIcon />}
                        >
                            {user === undefined ? 'Login' : 'My profile'}
                        </StyledButton>
                    )}
                </Box>
            </StyledHeaderBox>
        </StyledHeader>
    )
}
