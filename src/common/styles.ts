import { CSSProperties } from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

export const flexRowSpaceAround: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around'
}

export const flexRowSpaceBetween: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

export const flexColumnStart: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    gap: 10
}

export const flexColumnSpaceAround: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
}

export const flexRowStart: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    gap: 1
}

export const flexcenter: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2
}

export const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: 2,
    paddingX: 3,
    paddingY: 1.5,
    height: 40,
    fontWeight: 'bold',
    textTransform: 'none',
    backgroundColor: 'Black',
    '&:hover': {
        backgroundColor: theme.palette.primary.main
    }
}))
