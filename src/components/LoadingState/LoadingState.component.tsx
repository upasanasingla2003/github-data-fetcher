import { CircularProgress, Box } from '@mui/material'
import { flexcenter } from '@common'
import { NavBar } from '@components'

/**
 * A loading state component that displays a loading spinner.
 *
 * @component
 * @param {boolean} props.fullHeight - If true, the component takes full height of its container.
 * @returns {JSX.Element} A box containing a loading spinner.
 */
export const LoadingState: React.FC<{ fullHeight: boolean }> = ({
    fullHeight
}) => {
    return (
        <>
            <NavBar />
            <Box
                sx={{
                    ...flexcenter,
                    ...(fullHeight && { height: '100vh' })
                }}
            >
                <CircularProgress size={50} color="primary" />
            </Box>
        </>
    )
}
