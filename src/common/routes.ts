export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    USER_DETAILS: '/user/:username',
    PROFILE_PAGE: '/profile',
    NOT_FOUND: '*',
    /**
     * Generates a user details path for a given username.
     * @param {string} username - The GitHub username.
     * @returns {string} The formatted user details path.
     */
    usernamePath: (username: string) => {
        return `/user/${username}`
    }
}
