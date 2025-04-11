import { ReactNode } from 'react'

/**
 * Represents the details of a GitHub user.
 */
export interface UserDetails {
    bio: string
    location: string
    followers: number
    following: number
    blog: string
    id: number
    login: string
    avatar_url: string
    html_url: string
    message: string
}
/**
 * Represents the details of a GitHub user along with their followers and following lists.
 */
export interface UserDetailsType {
    userDetails: UserDetails
    following: User[]
    followers: User[]
}
/**
 * Represents a GitHub user.
 */
export interface User {
    id: number
    login: string
    avatar_url: string
}

export interface AuthUser {
    id: number
    login: string
    avatar_url: string
    token: string
}

/**
 * Represents the authentication state in the application.
 */
export interface AuthState {
    user?: AuthUser
    loading: boolean
    authError?: string
}
/**
 * Represents the state of the followers list.
 */
export interface FollowerState {
    followers: User[]
    loading: boolean
    error?: string
}
/**
 * Represents the state of the following list.
 */
export interface FollowingState {
    following: User[]
    loading: boolean
    error?: string
}
/**
 * Represents the state of user-related data.
 */
export interface UserState {
    users: User[]
    userDetails: UserDetails | null
    loading: boolean
    error?: string
}
/**
 * Generic interface for components dealing with a list of users.
 * @template T - The type of user data.
 */
export interface UserType<T> {
    users: T[]
}
/**
 * Generic interface for components dealing with an individual user.
 * @template T - The type of user data.
 */
export interface EachUserType<T> {
    user?: T
}
/**
 * Interface for the ProtectedRoute component props.
 * @property {ReactNode} children - The child components that will be rendered inside the protected route.
 */
export interface ProtectedRouteType {
    children: ReactNode
}

export interface FollowState {
    followings: []
    loading?: boolean
    error?: string
}
