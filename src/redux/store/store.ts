import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage' // Default is localStorage for web
import { persistReducer, persistStore } from 'redux-persist'
import {
    userSliceReducer,
    followerSliceReducer,
    followingSliceReducer,
    authSliceReducer
    // followSliceReducer
} from '@redux'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user', 'followers', 'following']
}

const rootReducer = combineReducers({
    user: userSliceReducer,
    follower: followerSliceReducer,
    following: followingSliceReducer,
    auth: authSliceReducer
    // follow: followSliceReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
            }
        })
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
