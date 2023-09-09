import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import CustomHeader from './components/Header';
import './styles/App.scss';
import { Outlet } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import CustomBottomNavigation from './components/BottomNavigation';

function ResponsiveDrawer({ window }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box className="App" sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { xs: '100%' } }}
      >
        {/* <Toolbar sx={{ minHeight: '64px' }} /> */}
        <Outlet />
        {/* <Toolbar sx={{ minHeight: '64px' }} /> */}
      </Box>
      <CustomBottomNavigation />
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
