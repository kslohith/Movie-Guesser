import * as React from 'react';
import { getMovieDetailsById } from '../api/movie';
import { Grid, Typography, ButtonBase, styled, Button } from '@mui/material';
import Loading from './common/LoadingIndicator';
import TwoCards from './TwoCards';

const StyledButtonBase = styled(ButtonBase)(({ theme }) => ({
    width: '100%',
    height: 'auto',
    cursor: 'pointer',
  }));

const Movie = {
  Title: ""
}

export default function Homepage() {

    const [movie1, setMovie1] = React.useState();
    const [movie2, setMovie2] = React.useState();
    const [fetchNextMovie, setFetchNextMovie] = React.useState(false);
    const imdbMovieSet = ["tt0068646","tt0102926","tt0111161","tt0082971","tt0468569","tt0071562","tt1375666","tt0083658","tt0095016","tt0110912"]
    const to_show = [];
    React.useEffect( () => {
      for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * imdbMovieSet.length); // Generate a random index
        const randomElement = imdbMovieSet.splice(randomIndex, 1)[0]; // Remove and get the randomly selected element
        if(i == 0){
          const data = getMovieDetailsById(randomElement).then( (movie) => {
            setMovie1(movie);
          });
        }
        else{
            getMovieDetailsById(randomElement).then( (movie) => {
            setMovie2(movie);
          })
        }
      }
    },[]);

    const getRandomId = () => {
      const newMovie1 = movie1.boxOffice > movie2.boxOffice ? movie1:movie2;
      setMovie1(newMovie1);
      const randomIndex = Math.floor(Math.random() * imdbMovieSet.length); // Generate a random index
      const randomElement = imdbMovieSet.splice(randomIndex, 1)[0]; // Remove and get the randomly selected element
      getMovieDetailsById(randomElement).then( (movie) => {
        setMovie2(movie);
      });
      setFetchNextMovie(false);
    }

  return (
    <Grid container spacing={2}>
     <Grid container spacing={2}>
      {/* Heading */}
      <Grid item xs={6}>
        <Typography variant="h7" gutterBottom>
          
        </Typography>
      </Grid>

      {/* Button */}
      <Grid item xs={6} textAlign={"right"} >
        <Button variant="contained" color="primary" style={{margin: "8px"}} disabled={!fetchNextMovie} onClick={getRandomId}>
          Next
        </Button>
      </Grid>
    </Grid>
     
      {movie1 != null ? <TwoCards movie1={movie1} movie2={movie2} enableNext={setFetchNextMovie}/> : <Loading />}
    </Grid>
  );
}
