import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loginUser, RootState, useDispatch, clearErrors } from '@redux'
import { useNavigate } from 'react-router-dom'
import { Typography, TextField, Button, Snackbar, Alert } from '@mui/material'
import { StyledLoginForm, StyledLoginContainer } from './Login.style'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { DEBOUNCE_DELAY_SNACKBAR, StyledButton } from '@common'
import { NavBar } from '@components'

/**
 * LoginPage component handles user login with username and personal access token.
 * It validates input, handles submission, and displays success/error messages using a Snackbar.
 *
 * @returns {JSX.Element} Rendered LoginPage component.
 */
export const LoginPage = () => {
    const [username, setUsername] = useState<string>('')
    const [token, setToken] = useState<string>('')
    const [usernameError, setUsernameError] = useState<string | null>(null)
    const [tokenError, setTokenError] = useState<string | null>(null)
    const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false) // ✅ Snackbar state
    const [snackbarMessage, setSnackbarMessage] = useState<string>('')
    const [snackbarSeverity, setSnackbarSeverity] = useState<
        'success' | 'error'
    >('success')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user, loading, authError } = useSelector(
        (state: RootState) => state.auth
    )

    /**
     * Effect hook to handle successful login and navigate to the profile page.
     * It displays a success message in the Snackbar and redirects after a delay.
     */
    useEffect(() => {
        if (user) {
            setSnackbarMessage('Login successful! Redirecting...')
            setSnackbarSeverity('success')
            setSnackbarOpen(true)
            setTimeout(() => navigate('/profile'), DEBOUNCE_DELAY_SNACKBAR)
        }
    }, [user, navigate])

    /**
     * Effect hook to handle authentication errors.
     * Displays an error message in the Snackbar when authError is set.
     */
    useEffect(() => {
        if (authError) {
            setSnackbarMessage(authError)
            setSnackbarSeverity('error')
            setSnackbarOpen(true)
        }
    }, [authError])

    useEffect(() => {
        const handlePageLoad = () => {
            dispatch(clearErrors())
            setSnackbarOpen(false)
        }

        window.onload = handlePageLoad
        return () => {
            window.onload = null
        }
    }, [dispatch])

    /**
     * Handles login form submission. Validates user input and dispatches the login action.
     *
     * @param {React.FormEvent} e - The form submission event.
     */
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()

        if (username.length < 3) {
            setUsernameError('Username must be at least 3 characters long.')
            return
        } else {
            setUsernameError('')
        }

        if (token.length === 0) {
            setTokenError('Token cannot be empty.')
            return
        } else {
            setTokenError('')
        }

        dispatch(loginUser({ username, token }))
    }

    function snackBarOnclose() {
        dispatch(clearErrors())
        setSnackbarOpen(false)
    }

    return (
        <>
            <NavBar user={user} />
            <Button
                color="primary"
                onClick={() => navigate(-1)}
                title="Click to Go Back"
                startIcon={<ArrowBackIcon />}
                sx={{ margin: '20px', marginLeft: '50px' }}
            >
                Go Back
            </Button>
            <StyledLoginContainer>
                <Typography variant="h4" gutterBottom>
                    Login
                </Typography>
                <StyledLoginForm>
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    {usernameError && (
                        <Alert severity="error">{usernameError}</Alert>
                    )}
                    <TextField
                        label="Personal Access Token"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={token}
                        onChange={e => setToken(e.target.value)}
                    />
                    {tokenError && <Alert severity="error">{tokenError}</Alert>}
                    <StyledButton
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={loading}
                        onClick={handleLogin}
                    >
                        Login
                    </StyledButton>
                </StyledLoginForm>
            </StyledLoginContainer>
            <Snackbar
                open={snackbarOpen}
                onClose={() => snackBarOnclose()}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    severity={snackbarSeverity}
                    onClose={() => setSnackbarOpen(false)}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    )
}
