import { ListItemText, ListItemAvatar, Avatar } from '@mui/material'
import { EachUserType, ROUTES, User } from '@common'
import { StyledListButton, StyledListItemText } from './ListItem.styles'
import { useNavigate } from 'react-router-dom'

/**
 * A list item component that displays a GitHub user's avatar and username.
 * Clicking the item navigates to the user's details page.
 *
 * @component
 * @param {User} props.user - The user object containing ID, login, and avatar URL.
 * @returns {JSX.Element} A styled list item representing a user.
 */
export const MyListItem: React.FC<EachUserType<User>> = ({ user }) => {
    /**
     * Hook for navigation between routes.
     * Used to navigate to the selected user's profile page.
     */
    const navigate = useNavigate()
    return (
        <>
            {user !== undefined && (
                <StyledListItemText key={user.id}>
                    <StyledListButton
                        onClick={() => {
                            const path = ROUTES.usernamePath(user.login)
                            navigate(path)
                        }}
                    >
                        <ListItemAvatar>
                            <Avatar src={user.avatar_url} alt="github avatar" />
                        </ListItemAvatar>
                        <ListItemText primary={user.login} />
                    </StyledListButton>
                </StyledListItemText>
            )}
        </>
    )
}
