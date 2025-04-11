import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { GITHUB_API, HEADERS, searchQuery, userQuery } from '@common'
import { User, UserDetails, UserState } from '@common'

const initialState: UserState = {
    users: [],
    userDetails: null,
    loading: false
}

/**
 * Async thunk action to search for GitHub users based on a search query.
 * This function performs an API call to GitHub's REST API to retrieve users matching the search query.
 * @param {string} value - The search query value used to find users.
 * @returns {Promise<User[]>} A promise that resolves to an array of users matching the search query.
 */
export const fetchUsers = createAsyncThunk(
    'fetchUsers',
    async (value: string) => {
        const response = await fetch(GITHUB_API + searchQuery(value), {
            headers: HEADERS
        })
        const data = await response.json()
        return data.items as User[]
    }
)

/**
 * Async thunk action to fetch detailed information of a specific GitHub user.
 * This function performs an API call to GitHub's REST API to retrieve detailed information about a user.
 * @param {string} username - The GitHub username for which to fetch details.
 * @returns {Promise<UserDetails>} A promise that resolves to detailed information about the user.
 */
export const fetchUserDetails = createAsyncThunk(
    'fetchUserDetails',
    async (username: string) => {
        const response = await fetch(GITHUB_API + userQuery(username), {
            headers: HEADERS
        })
        const data = await response.json()
        return data as UserDetails
    }
)

/**
 * User slice of the Redux store, responsible for managing user-related state, including fetching users and user details.
 * @type {Slice<UserState>} The slice managing the state of users, user details, and loading state.
 */
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearUsers: state => {
            state.users = []
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, state => {
                state.loading = true
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
            })
            .addCase(fetchUserDetails.pending, state => {
                state.loading = true
            })
            .addCase(fetchUserDetails.fulfilled, (state, action) => {
                state.loading = false
                state.userDetails = action.payload
            })
            .addCase(fetchUserDetails.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
            })
    }
})

export const userSliceReducer = userSlice.reducer
export const { clearUsers } = userSlice.actions
