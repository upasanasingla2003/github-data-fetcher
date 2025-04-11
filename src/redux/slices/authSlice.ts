import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AuthState, GITHUB_USER_API, AuthUser } from '@common'

/**
 * Async thunk action to log in a user using GitHub's API.
 * This function checks the credentials provided (username and password),
 * and retrieves user data from GitHub using the provided personal access token.
 *
 * @param {Object} credentials - The login credentials.
 * @param {string} credentials.username - The GitHub username of the user.
 * @param {string} credentials.token - The personal access token (used as the password).
 * @returns {Promise<User>} A promise that resolves to the user data if login is successful.
 */
export const loginUser = createAsyncThunk<
    AuthUser,
    { username: string; token: string },
    { rejectValue: string }
>('auth/loginUser', async ({ username, token }, { rejectWithValue }) => {
    const response = await fetch(GITHUB_USER_API, {
        headers: {
            Authorization: `token ${token}`
        }
    })

    if (!response.ok) {
        return rejectWithValue('Invalid credentials')
    }

    const userData: AuthUser = await response.json()
    userData.token = token
    if (userData.login !== username) {
        return rejectWithValue('Username does not match token')
    }
    return userData
})

const initialState: AuthState = {
    loading: false
}

/**
 * The auth slice of the Redux store, responsible for managing authentication-related state.
 * It includes actions to log in a user and set the logged-in user's data.
 */
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearErrors: state => {
            state.authError = undefined
        }
    },
    extraReducers: builder => {
        builder
            .addCase(loginUser.pending, state => {
                state.loading = true
                state.authError = undefined
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
                state.authError = undefined
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false
                state.authError = action.payload as string
            })
    }
})

export const authSliceReducer = authSlice.reducer
export const { clearErrors } = authSlice.actions
