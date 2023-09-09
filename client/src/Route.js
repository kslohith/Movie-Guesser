import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Homepage from './components/homepage';
import StartGamePage from './components/startGamePage';
import ProtectedRoutes from './components/ProtectedRoutes';
import App from './App';
import AboutUs from './components/About';
import Leaderboard from './components/leaderboard';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <StartGamePage />,
  },
  {
    path: '/',
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/',
        element: <App />,
        children: [
         
          {
            path: '/start',
            element: <StartGamePage />,
          },
          {
            path: '/game',
            element: <Homepage />,
          },
          {
            path: '/leaderboard',
            element: <Leaderboard />,
          },
          {
            path: '/review',
            element: <Homepage />,
          },
          {
            path: '/about',
            element: <AboutUs />,
          },
        ],
      },
    ],
  }
]);

export default router;
