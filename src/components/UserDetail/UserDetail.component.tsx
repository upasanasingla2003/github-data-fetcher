import { Typography, Link } from '@mui/material'
import {
    StyledAvatar,
    StyledBioTypography,
    StyledDetailBox,
    StyledLocationBioBox,
    StyledMainBox,
    StyledUsernameTopography
} from './UserDetail.styles'
import { MyList } from '@components'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ArticleIcon from '@mui/icons-material/Article'
import { UserDetailsType, StyledButton } from '@common'
import PersonIcon from '@mui/icons-material/Person'

/**
 * A component that displays detailed information about a GitHub user,
 * including their avatar, bio, location, blog, followers, and following.
 *
 * @component
 * @param {UserDetails} props.userDetails - The details of the GitHub user.
 * @param {User[]} props.followers - The list of users who follow the GitHub user.
 * @param {User[]} props.following - The list of users the GitHub user is following.
 * @returns {JSX.Element} The user detail section.
 */
export const UserDetail: React.FC<UserDetailsType> = ({
    userDetails,
    followers,
    following,
}) => {
    return (
        <StyledMainBox>
            <StyledDetailBox sx={{ marginTop: '5px' }}>
                <StyledAvatar
                    src={userDetails.avatar_url}
                    alt={`github avatar of ${userDetails.login}`}
                />
                <StyledUsernameTopography variant="h4">
                    <strong>{userDetails.login} </strong>
                </StyledUsernameTopography>

                <StyledBioTypography variant="body1">
                    {userDetails.bio ? userDetails.bio : 'This is a GitHubUser'}
                </StyledBioTypography>

                {userDetails.location && (
                    <StyledLocationBioBox>
                        <LocationOnIcon fontSize="medium" />
                        <Typography variant="h6" fontWeight="bold">
                            {userDetails.location}
                        </Typography>
                    </StyledLocationBioBox>
                )}

                {userDetails.blog && (
                    <StyledLocationBioBox>
                        <ArticleIcon fontSize="medium" />
                        <Link
                            href={userDetails.blog}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {userDetails.blog}
                        </Link>
                    </StyledLocationBioBox>
                )}

                <StyledButton
                    variant="contained"
                    color="primary"
                    title="Click to go to Github Profile"
                    onClick={() => {
                        window.open(userDetails.html_url, '_blank')
                    }}
                    startIcon={<PersonIcon />}
                >
                    GitHub Profile
                </StyledButton>
            </StyledDetailBox>
            <StyledDetailBox>
                <Typography variant="h6">
                    <strong>Followers:</strong> {userDetails.followers}
                </Typography>
                <MyList users={followers} />
            </StyledDetailBox>
            <StyledDetailBox>
                <Typography variant="h6">
                    <strong>Following:</strong> {userDetails.following}
                </Typography>
                <MyList users={following} />
            </StyledDetailBox>
        </StyledMainBox>
    )
}
