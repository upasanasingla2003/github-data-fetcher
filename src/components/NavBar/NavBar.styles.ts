import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { flexRowSpaceBetween } from '@common'

export const StyledHeader = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    height: '120px'
}))

export const StyledHeaderBox = styled(Box)(() => ({
    ...flexRowSpaceBetween,
    margin: '0 80px 0 40px',
    height: '120px'
}))
