import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    GITHUB_API,
    HEADERS,
    followingQuery,
    FollowingState,
    User
} from '@common'

const initialState: FollowingState = {
    following: [],
    loading: false
}

/**
 * Async thunk action to fetch users that a GitHub user is following.
 * This function performs an API call to GitHub's REST API to retrieve a list of users that the specified user is following.
 * @param {string} username - The GitHub username for which to fetch the list of following users.
 * @returns {Promise<User[]>} The list of users that the specified user is following.
 */
export const fetchFollowing = createAsyncThunk(
    'fetchFollowing',
    async (username: string) => {
        const response = await fetch(GITHUB_API + followingQuery(username), {
            headers: HEADERS
        })
        const data = await response.json()
        return data as User[]
    }
)

/**
 * The slice for managing following state in Redux.
 * This slice handles the loading state, the list of following, and any potential errors that occur during the fetching process.
 * @type {Slice<FollowingState>} The following slice
 */
const followingSlice = createSlice({
    name: 'following',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchFollowing.pending, state => {
                state.loading = true
            })
            .addCase(fetchFollowing.fulfilled, (state, action) => {
                state.loading = false
                state.following = action.payload
            })
            .addCase(fetchFollowing.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
            })
    }
})

export const followingSliceReducer = followingSlice.reducer
