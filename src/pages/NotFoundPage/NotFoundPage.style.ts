import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import { flexColumnSpaceAround } from '@common'

export const StyledNotFoundBox = styled(Box)(({ theme }) => ({
    ...flexColumnSpaceAround,
    height: '100vh',
    backgroundColor: theme.palette.secondary.main,
    padding: '50px'
}))
