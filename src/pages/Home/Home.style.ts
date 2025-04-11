import { styled } from '@mui/material/styles'
import { Box, TextField } from '@mui/material'
import { flexColumnStart } from '@common'

export const StyledHomeBox = styled(Box)(() => ({
    ...flexColumnStart,
    marginTop: '20px',
    gap: '40px'
}))

export const StyledSearchBox = styled(TextField)(
    ({ theme: { shape, shadows } }) => ({
        width: '400px',
        backgroundColor: 'white',
        borderRadius: shape.borderRadius,
        boxShadow: shadows[1],
        '& .MuiOutlinedInput-root': {
            borderRadius: shape.borderRadius
        },
        margin: '0 auto'
    })
)
