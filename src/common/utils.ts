import { PER_PAGE } from '@common'

/**
 * Generates a search query for GitHub users.
 * @param {string} value - The search input value.
 * @returns {string} The formatted search query string.
 */
export const searchQuery = (value: string): string => {
    return `search/users?q=${value}&per_page=${PER_PAGE}`
}

/**
 * Generates a query to fetch details of a specific GitHub user.
 * @param {string} username - The GitHub username.
 * @returns {string} The formatted user details query string.
 */
export const userQuery = (username: string): string => {
    return `users/${username}`
}

/**
 * Generates a query to fetch followers of a specific GitHub user.
 * @param {string} username - The GitHub username.
 * @returns {string} The formatted followers query string.
 */
export const followerQuery = (username: string): string => {
    return `users/${username}/followers?per_page=${PER_PAGE}`
}

/**
 * Generates a query to fetch users that a specific GitHub user is following.
 * @param {string} username - The GitHub username.
 * @returns {string} The formatted following query string.
 */
export const followingQuery = (username: string): string => {
    return `users/${username}/following?per_page=${PER_PAGE}`
}
