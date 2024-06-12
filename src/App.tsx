import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Router from './Router'
import CircularProgress from '@mui/material/CircularProgress';
import theme from '@styles/theme'
import '@styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider
        router={Router}
        fallbackElement={<CircularProgress />}
      />
    </ThemeProvider>
  </React.StrictMode>,
)
