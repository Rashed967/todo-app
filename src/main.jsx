import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import {ThemeProvider } from '@mui/material/styles';
import theme from './theme/Theme'
import {Container } from '@mui/material'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

   <Container maxWidth="xl">
    <RouterProvider router={router} />
   </Container>
  
    </ThemeProvider>
  </React.StrictMode>,
)
