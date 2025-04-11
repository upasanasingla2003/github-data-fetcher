import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    GITHUB_API,
    followerQuery,
    HEADERS,
    User,
    FollowerState
} from '@common'

const initialState: FollowerState = {
    followers: [],
    loading: false
}

/**
 * Async thunk action to fetch followers of a GitHub user.
 * This function performs an API call to GitHub's REST API to retrieve a list of followers for the given user.
 * @param {string} username - The GitHub username for which to fetch followers.
 * @returns {Promise<User[]>} The list of followers.
 */
export const fetchFollowers = createAsyncThunk(
    'fetchFollowers',
    async (username: string) => {
        const response = await fetch(GITHUB_API + followerQuery(username), {
            headers: HEADERS
        })
        const data = await response.json()
        return data as User[]
    }
)

/**
 * The slice for managing followers state in Redux.
 * This slice handles the loading state, the list of followers, and any potential errors that occur during the fetching process.
 * @type {Slice<FollowerState>} The followers slice
 */
const followerSlice = createSlice({
    name: 'followers',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchFollowers.pending, state => {
                state.loading = true
            })
            .addCase(fetchFollowers.fulfilled, (state, action) => {
                state.loading = false
                state.followers = action.payload
            })
            .addCase(fetchFollowers.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
            })
    }
})

export const followerSliceReducer = followerSlice.reducer
