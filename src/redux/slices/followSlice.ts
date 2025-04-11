// import { FollowState } from '@common/types'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const followUser = createAsyncThunk(
    'user/followUser',
    async (
        { username, token }: { username: string; token: string },
        { rejectWithValue }
    ) => {
        const response = await fetch(
            `https://api.github.com/user/following/${username}`,
            {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/vnd.github+json'
                }
            }
        )
        if (!response.ok) {
            return rejectWithValue('Failed to follow user')
        }

        return username
    }
)

// const initialState: FollowState = {
//     followings: []
// }

// const followSlice = createSlice({
//     name: 'follow',
//     initialState,
//     reducers: {},
//     extraReducers: builder => {
//         builder
//             .addCase(followUser.pending, state => {
//                 state.loading = true
//             })
//             .addCase(followUser.fulfilled, state => {
//                 state.loading = false
//                 state.error = undefined
//             })
//             .addCase(followUser.rejected, (state, action) => {
//                 state.loading = false
//                 state.error = action.payload as string
//             })
//     }
// })

// export const followSliceReducer = followSlice.reducer
