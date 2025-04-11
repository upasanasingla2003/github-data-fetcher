import { styled } from '@mui/material/styles'
import { ListItemButton, ListItemText } from '@mui/material'

export const StyledListButton = styled(ListItemButton)(
    ({ theme: { transitions, shape } }) => ({
        transition: `${transitions.custom.transform}, ${transitions.custom.background}`,
        '&:hover': {
            transform: 'scale(1.05)'
        },
        borderRadius: shape.borderRadius,
        margin: '10px',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '0px',
            left: '50%',
            width: '90%',
            height: '0.5px',
            backgroundColor: 'black',
            transform: 'translateX(-50%)'
        }
    })
)

export const StyledListItemText = styled(ListItemText)(() => ({
    '& .MuiTypography-root': {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '390px'
    }
}))
