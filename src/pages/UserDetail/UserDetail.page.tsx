import { useNavigate, useParams } from 'react-router-dom'
import { UserDetail, NavBar, LoadingState } from '@components'
import { useEffect } from 'react'
import {
    useDispatch,
    useSelector,
    fetchUserDetails,
    RootState,
    fetchFollowing,
    fetchFollowers,
} from '@redux'
import { Button, Alert } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { NotFoundPage } from '@pages'
// import { StyledButton } from '@common/styles'

/**
 * The User Detail Page component fetches and displays detailed information
 * about a specific GitHub user, including their followers, following, and personal details.
 * It handles loading, error, and empty user states, and allows the user to navigate back.
 *
 * @component
 * @returns {JSX.Element} The user detail page with user information.
 */
export const UserDetailPage: React.FC = () => {
    /**
     * Hook for navigating between routes.
     * Used to navigate to the previous page when the 'Go Back' button is clicked.
     */
    // const [click, setClick] = useState<boolean>(false)
    const navigate = useNavigate()
    const { username } = useParams<{ username: string }>()
    /**
     * Redux dispatch function to dispatch actions.
     */
    const dispatch = useDispatch()
    /**
     * Redux selector to access user details from the Redux store.
     * @property {UserDetails} userDetails - The details of the GitHub user.
     * @property {boolean} loading - A flag indicating if the data is still being fetched.
     * @property {string} error - Any error message if fetching data fails.
     */
    const { userDetails, loading, error } = useSelector(
        (state: RootState) => state.user
    )

    const { user } = useSelector((state: RootState) => state.auth)
    /**
     * Redux selector to access the list of users the GitHub user is following.
     */
    const { following } = useSelector((state: RootState) => state.following)
    /**
     * Redux selector to access the list of followers of the GitHub user.
     */
    const { followers } = useSelector((state: RootState) => state.follower)

    // const { followings } = useSelector((state: RootState) => state.follow)
    /**
     * useEffect hook to fetch followers and following when the username is available.
     */
    useEffect(() => {
        if (username) {
            dispatch(fetchFollowers(username))
            dispatch(fetchFollowing(username))
        }
    }, [username, dispatch])

    /**
     * useEffect hook to fetch the user details when the username is available.
     */
    useEffect(() => {
        if (username) {
            dispatch(fetchUserDetails(username))
        }
    }, [username, dispatch])

    // useEffect(() => {
    //     if (userDetails && user) {
    //         dispatch(fetchFollowers(userDetails.login))
    //         dispatch(fetchFollowing(user.token))
    //     }
    // }, [userDetails, userDetails?.login, dispatch, user, user?.token])
    // useEffect(() => {
    //     if (click && userDetails && user) {
    //         dispatch(followUser(userDetails.login))
    //         dispatch(fetchFollowers(userDetails.login))
    //         dispatch(fetchFollowing(user.token))
    //     }
    // }, [click, dispatch, user, userDetails])

    if (loading) return <LoadingState fullHeight={true} />

    if (error)
        return (
            <Alert severity="error" sx={{ width: '100%' }}>
                {error}
            </Alert>
        )

    if (userDetails !== null && userDetails.message === 'Not Found') {
        return <NotFoundPage />
    }

    return (
        <>
            <NavBar user={user} />
            <Button
                color="primary"
                onClick={() => navigate(-1)}
                title="Click to Go Back"
                startIcon={<ArrowBackIcon />}
                sx={{ margin: '20px', marginLeft: '50px' }}
            >
                Go Back
            </Button>
            {userDetails && (
                <UserDetail
                    userDetails={userDetails}
                    following={following}
                    followers={followers}
                ></UserDetail>
            )}
        </>
    )
}
