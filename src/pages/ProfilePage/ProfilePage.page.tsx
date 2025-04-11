import { UserDetail, NavBar } from '@components'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import {
    useDispatch,
    useSelector,
    RootState,
    fetchFollowing,
    fetchFollowers
} from '@redux'
import { flexcenter, UserDetails, AuthUser } from '@common'
import { Button, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

/**
 * ProfilePage component displays the user's profile information, including details,
 * following, and followers. If the user is not logged in, it shows a message prompting
 * the user to log in. It fetches the following and followers data using Redux actions
 * when the user is available.
 *
 * @returns {JSX.Element} The rendered ProfilePage component.
 */
export const ProfilePage: React.FC = () => {
    const { user } = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch()
    const { following } = useSelector((state: RootState) => state.following)
    const { followers } = useSelector((state: RootState) => state.follower)
    const navigate = useNavigate()

    /**
     * useEffect hook that fetches the followers data whenever the `user` is available.
     * It dispatches the fetchFollowers action with the user's login when the user is logged in.
     */
    useEffect(() => {
        if (user) {
            dispatch(fetchFollowers(user.login))
        }
    }, [user, dispatch])

    /**
     * useEffect hook that fetches the following data whenever the `user` is available.
     * It dispatches the fetchFollowing action with the user's login when the user is logged in.
     */
    useEffect(() => {
        if (user) {
            dispatch(fetchFollowing(user.login))
        }
    }, [user, dispatch])

    if (user === undefined) {
        return (
            <Typography sx={{ ...flexcenter, height: '100vh' }}>
                Login First
            </Typography>
        )
    }

    // export function handleFollowingChange() {
    //     dispatch(fetchFollowing)
    // }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { token, ...userDetails } = user as AuthUser & UserDetails

    return (
        <>
            <NavBar user={user} />
            <Button
                color="primary"
                onClick={() => navigate(-1)}
                title="Click to Go Back"
                startIcon={<ArrowBackIcon />}
                sx={{ margin: 2 }}
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
