import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import variables from '../styles/global.scss';
import { useNavigate } from 'react-router-dom';

const CustomHeader = ({ drawerWidth, handleDrawerToggle }) => {
  const navigate = useNavigate();
  const Logout = () => {
    try {
      document.cookie = 'user_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: variables['background-color'],
        boxShadow: 'none',
        color: 'black',
      }}
    >
      <Toolbar
        sx={{
          paddingTop: '24px',
          paddingBottom: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div />
        {/* <Typography variant="h6" noWrap component="div">
        Green Consultants and Services
      </Typography> */}
        <Button color="primary" startIcon={<LogoutIcon />} onClick={Logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default CustomHeader;
