import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

// Sidebar Icons
import LeaderBoardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import HomeIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

const links = [
  {
    icon: <HomeIcon />,
    text: 'Home',
    path: '/game',
  },
  {
    icon: <LeaderBoardRoundedIcon />,
    text: 'Leaderboard',
    path: '/leaderboard',
  },
  {
    icon: <InfoRoundedIcon />,
    text: 'About Game',
    path: '/about',
  }
  
];

export default function CustomBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [value]);

  return (
    <Box
      className="custom-bottom-navigation"
      sx={{ zIndex: 1, pb: 7, display: { sm: 'none' } }}
      ref={ref}
    >
      <CssBaseline />
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        className="navigation-wrapper"
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            navigate(newValue);
          }}
          className="navigation-wrapper"
        >
          {links.map((link, i) => {
              return (
                <BottomNavigationAction
                  key={i}
                  label={link.text}
                  icon={link.icon}
                  value={link.path}
                />
          )}
          )}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
