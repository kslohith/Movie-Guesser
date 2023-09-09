import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  styled,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomSnackbars from './common/Snackbar';


const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: theme.spacing(2),
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(3),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1.5),
  fontWeight: 'bold',
}));

const StartGamePage = ({  }) => {
  const [name, setName] = useState('');
  const [openSnackBar, setopenSnackBar] = React.useState(false);
  const navigate = useNavigate();


  const handleStartGame = () => {
    console.log(name);
    document.cookie = 'user_id=' + name;
    setopenSnackBar({
      severity: 'success',
      message: `Login Successful!`,
    });
    navigate('/game');
  };

  const handleSnackbarClose = () => {
    setopenSnackBar(false);
  };

  return (
    <StyledContainer>
      <StyledPaper elevation={3}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Game!
        </Typography>
        <StyledTextField
          label="Enter Your Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <StyledButton
          variant="contained"
          color="primary"
          onClick={handleStartGame}
        >
          Start Game
        </StyledButton>
      </StyledPaper>
      {openSnackBar && (
        <CustomSnackbars
          open={openSnackBar}
          onClose={handleSnackbarClose}
          severity={openSnackBar.severity}
          message={openSnackBar.message}
        />
      )}
    </StyledContainer>
  );
};

export default StartGamePage;
