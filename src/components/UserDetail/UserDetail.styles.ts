import { flexColumnStart, flexRowSpaceAround, flexRowStart } from '@common'
import { Avatar, Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledAvatar = styled(Avatar)(
    ({ theme: { customBorder, shadows } }) => ({
        width: '100px',
        height: '100px',
        border: customBorder.default,
        marginBottom: '2px',
        boxShadow: shadows[1]
    })
)

export const StyledMainBox = styled(Box)(() => ({
    ...flexRowSpaceAround,
    marginRight: '20px',
    marginLeft: '20px'
}))

export const StyledDetailBox = styled(Box)(() => ({
    ...flexColumnStart,
    alignSelf: 'top',
    width: '400px'
}))

export const StyledLocationBioBox = styled(Box)(() => ({
    ...flexRowStart,
    alignSelf: 'center'
}))

export const StyledBioTypography = styled(Typography)(
    ({ theme: { typography } }) => ({
        fontStyle: typography.body1.fontStyle,
        marginBottom: '2px',
        textAlign: 'center',
        color: typography.body1.color,
        fontSize: typography.body1.fontSize,
        lineHeight: typography.body1.lineHeight,
        alignSelf: 'center'
    })
)

export const StyledUsernameTopography = styled(Typography)(() => ({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '400px'
}))
