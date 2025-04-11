import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { persistor, store } from '@redux'
import { PersistGate } from 'redux-persist/integration/react'
import { RouterProvider } from 'react-router-dom'
import { router } from '@routes'
import { App } from './App'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '@theme'
import CssBaseline from '@mui/material/CssBaseline'

/**
 * The main entry point for the React application.
 * This code initializes the React app by rendering the root component into the DOM.
 * It includes multiple wrappers for functionality like theming, Redux store management, and routing.
 * @function
 * @returns {void}
 */
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <RouterProvider router={router} />
                    <App />
                </PersistGate>
            </Provider>
        </ThemeProvider>
    </StrictMode>
)
