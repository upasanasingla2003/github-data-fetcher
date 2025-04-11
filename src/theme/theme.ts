import { createTheme } from '@mui/material/styles'
declare module '@mui/material/styles' {
    interface Transitions {
        custom: {
            transform: string
            background: string
        }
    }
    interface TransitionsOptions {
        custom?: {
            transform?: string
            background?: string
        }
    }

    interface Theme {
        customBorder: {
            default: string
        }
    }
    interface ThemeOptions {
        customBorder?: {
            default?: string
        }
    }
}

export const theme = createTheme({
    palette: {
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#F6F8FA'
        }
    },
    typography: {
        body1: {
            color: '#555',
            fontSize: '1.2rem',
            lineHeight: '1.5rem'
        }
    },
    transitions: {
        custom: {
            transform: 'transform 0.2s ease-in-out',
            background: 'background-color 0.3s ease-in-out'
        }
    },
    shape: {
        borderRadius: 8
    },
    customBorder: {
        default: '4px solid #fff'
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    shadows: [...Array(24).fill('0px 4px 8px rgba(0, 0, 0, 0.15)')] as any
})
