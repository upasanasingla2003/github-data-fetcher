import { useState, useEffect } from 'react'
import {
    useDispatch,
    fetchUsers,
    useSelector,
    RootState,
    clearUsers
} from '@redux'
import { NavBar, MyList } from '@components'
import { StyledHomeBox, StyledSearchBox } from './Home.style'
import { Box, Alert, InputAdornment } from '@mui/material'
import { DEBOUNCE_DELAY_USERLIST, flexcenter } from '@common'
import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import ClearIcon from '@mui/icons-material/Clear'

/**
 * The home page component that includes a search box for GitHub users
 * and displays a list of users based on the search query.
 * It handles fetching and clearing users, and also displays error alerts if needed.
 *
 * @component
 * @returns {JSX.Element} The home page with search functionality and user list.
 */
export const Home: React.FC = () => {
    /**
     * State for managing the input value in the search box.
     * @type {string}
     */
    const [inputValue, setInputValue] = useState('')

    /**
     * Redux dispatch function used for dispatching actions.
     */
    const dispatch = useDispatch()

    /**
     * Redux selector to access the users data and error from the Redux store.
     * @property {User[]} users - The list of users fetched from the GitHub API.
     * @property {string} error - The error message if an error occurs while fetching users.
     */
    const { users, error } = useSelector((state: RootState) => state.user)

    /**
     * Redux selector to access the authenticated user data from the Redux store.
     * @property {User | null} user - The currently logged-in user. Null if no user is authenticated.
     */
    const { user } = useSelector((state: RootState) => state.auth)

    /**
     * useEffect hook to fetch users after a debounce delay when the input value changes.
     */
    useEffect(() => {
        const debounce = setTimeout(() => {
            if (inputValue) {
                dispatch(fetchUsers(inputValue))
            }
        }, DEBOUNCE_DELAY_USERLIST)

        return () => clearTimeout(debounce)
    }, [inputValue, dispatch])

    /**
     * Handles the cross (reset) button click event to clear the users and reset the input value.
     */
    function handleClear() {
        dispatch(clearUsers())
        setInputValue('')
    }

    if (error)
        return (
            <Alert severity="error" sx={{ width: '100%' }}>
                {error}
            </Alert>
        )

    return (
        <>
            <NavBar user={user} />
            <StyledHomeBox>
                <Box sx={{ ...flexcenter }}>
                    <StyledSearchBox
                        placeholder="Search GitHub users..."
                        variant="outlined"
                        fullWidth
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: inputValue && (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClear}
                                            edge="end"
                                            aria-label="clear search"
                                        >
                                            <ClearIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }
                        }}
                    />
                </Box>
                <Box>
                    <MyList users={users} />
                </Box>
            </StyledHomeBox>
        </>
    )
}
