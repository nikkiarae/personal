import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom';
import Router from './Router'
import CircularProgress from '@mui/material/CircularProgress';
import '@styles/index.css'
import ThemeProvider from './hooks/useTheme';
import { theme } from '@styles/theme';

const App = () => {

  return (
  <Suspense fallback={<div>Loading...</div>}>
    <ThemeProvider palette={theme}>
      <RouterProvider
        router={Router}
        fallbackElement={<CircularProgress />}
      />
    </ThemeProvider>
  </Suspense>
  )
}

export default App