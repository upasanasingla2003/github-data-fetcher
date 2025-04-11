import { Box, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { StyledNotFoundBox } from './NotFoundPage.style'
import { ROUTES, StyledButton } from '@common'
import { useNavigate } from 'react-router-dom'

/**
 * NotFoundPage component displays a 404 error page when a user navigates to a non-existent route.
 *
 * @component
 * @returns {JSX.Element} A styled 404 error page with an image, error message, and a button that navigates back to the homepage.
 */
export const NotFoundPage: React.FC = () => {
    const navigate = useNavigate()
    return (
        <StyledNotFoundBox>
            <Box
                component="img"
                src="/404Image.png"
                alt="404 Not Found"
                sx={{ width: '300px', height: '300px' }}
            />
            <Typography variant="h3">Oops! Page Not Found</Typography>
            <Typography variant="body1">
                Sorry, the page you're looking for doesn't exist.
            </Typography>
            <StyledButton
                variant="contained"
                color="primary"
                title="Click to Login"
                onClick={() => navigate(ROUTES.HOME)}
                startIcon={<ArrowBack />}
            >
                Go Back to Home
            </StyledButton>
        </StyledNotFoundBox>
    )
}
