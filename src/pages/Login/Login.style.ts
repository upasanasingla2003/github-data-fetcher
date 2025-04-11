import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import { flexColumnStart } from '@common'

export const StyledLoginContainer = styled(Box)(() => ({
    ...flexColumnStart,
    marginTop: 40
}))

export const StyledLoginForm = styled(Box)(() => ({
    ...flexColumnStart,
    gap: 20,
    width: '600px'
}))
