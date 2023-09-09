import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import router from './Route';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
  // </React.StrictMode>
);
