import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Paper, Button } from '@mui/material';
import InfoCard from './Card';
import PopupComponent from './PopUp';



const TwoCards = (props) => {
    const {movie1,movie2,enableNext} = props;
    const [boxOffice, setBoxOffice] = React.useState(false);
    const [selectedMovie, setSelectedMovie] = React.useState("");
    const [showResult, setShowResult] = React.useState(false);
    const [score, setScore] = React.useState(0);
    const [endGame, setEndGame] = React.useState(false);

    const revealBoxOfficeCollection = (movie) => {
        setBoxOffice(true);
        enableNext(true);
        setSelectedMovie(movie);
        setShowResult(true);
    }

    const restartGame = () => {
      setScore(0);
      setEndGame(false);
      enableNext(false);
      setShowResult(false);
    }

    useEffect(() => {
        setBoxOffice(false);
    },[movie1,movie2]);

    useEffect(() => {
      if(endGame){
        enableNext(false);
      }
    },[endGame]);

  return (
    <>
    {!endGame && <Grid container spacing={2}>
       <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h7" align="center">
              SCORE :
            </Typography>
            <Typography variant="h7" align="center">
             &nbsp; {score}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} >
        <InfoCard movie={movie1} boxOffice={boxOffice} revealBoxOffice={revealBoxOfficeCollection} />
      </Grid>
      <Grid item xs={12} sm={6} >
        <InfoCard movie={movie2} boxOffice={boxOffice} revealBoxOffice={revealBoxOfficeCollection}/>
      </Grid>
      {showResult && <PopupComponent selectedMovie={selectedMovie} movie1={movie1} movie2={movie2} oncloseHandler={setShowResult} scoreHandler={setScore} score={score} endGameHandler={setEndGame} />}
    </Grid>
    }
    {endGame && <Grid container justifyContent="center" spacing={2}>
      <Paper elevation={3} style={{ padding: '20px', margin: '16px' }}>
          <Typography variant="h6" align="center">
              Wrong answer
          </Typography>
          <Typography variant="h7" align="center">
              Thanks for playing. Your Final Score is {score}
          </Typography>
          <Typography align="center" style={{margin: '8px'}}>
            <Button onClick={restartGame} variant="outlined">Restart game</Button>
          </Typography>
      </Paper>
    </Grid>
    }
    </>
  );
};

export default TwoCards;
