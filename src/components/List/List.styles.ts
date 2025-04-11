import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const StyledBox = styled(Box)(({ theme: { shape, shadows } }) => ({
    width: '400px',
    maxHeight: '400px',
    overflowY: 'auto',
    padding: '6px',
    borderRadius: shape.borderRadius,
    boxShadow: shadows[1],
    '&::-webkit-scrollbar': {
        display: 'none'
    },
    scrollBehavior: 'smooth'
}))
