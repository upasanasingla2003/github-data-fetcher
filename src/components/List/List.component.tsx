import { List } from '@mui/material'
import { UserType, User } from '@common'
import { MyListItem } from '@components'
import { StyledBox } from './List.styles'

/**
 * A component that displays a list of GitHub users.
 *
 * @component
 * @param {User[]} props.users - The list of users to be displayed.
 * @returns {JSX.Element} A styled list of users or an empty fragment if no users exist.
 */
export const MyList: React.FC<UserType<User>> = ({ users }) => {
    return (
        <>
            {users?.length ? (
                <StyledBox>
                    <List sx={{ borderRadius: 2 }}>
                        {users.map(user => (
                            <MyListItem user={user} />
                        ))}
                    </List>
                </StyledBox>
            ) : (
                <></>
            )}
        </>
    )
}
