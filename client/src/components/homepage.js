import * as React from 'react';
import { getMovieDetailsById } from '../api/movie';
import { Grid, Typography, ButtonBase, styled, Button } from '@mui/material';
import Loading from './common/LoadingIndicator';
import TwoCards from './TwoCards';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const StyledButtonBase = styled(ButtonBase)(({ theme }) => ({
    width: '100%',
    height: 'auto',
    cursor: 'pointer',
  }));

const Movie = {
  Title: ""
}

export default function Homepage() {

    const [showInstruction, setShowInstruction] = React.useState(false);
    const [movie1, setMovie1] = React.useState();
    const [movie2, setMovie2] = React.useState();
    const [fetchNextMovie, setFetchNextMovie] = React.useState(false);
    const imdbMovieSet = ["tt0068646","tt0102926","tt0111161","tt0082971","tt0468569","tt0071562","tt1375666","tt0083658","tt0095016","tt0110912","tt0499549","tt0120338","tt4154756","tt10872600","tt0369610","tt6105098","tt0848228","tt2820852","tt1745960","tt1825683","tt1201607","tt6718170","tt2527336","tt2294629","tt2771200","tt4630562","tt1300854","tt3498820","tt1477834","tt0167260","tt1074638","tt6320628","tt2109248","tt1345836","tt7286456","tt1979376","tt1298650","tt3469046","tt2948356","tt0241527","tt2283362","tt0926084","tt2310332","tt0266543","tt5113044","tt2709768","tt2975590","tt1951264","tt9114286","tt0451279"]
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
      setShowInstruction(true);
    },[]);

    const handleClose = () => {
      setShowInstruction(false);
    }

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
  <>
    <Grid container spacing={2}>
     <Grid container spacing={2} style={{ margin: '8px'}}>
      {movie1 != null ? <TwoCards movie1={movie1} movie2={movie2} enableNext={setFetchNextMovie}/> : <Loading />}
    </Grid>
    <Grid item xs={6}>
        <Typography variant="h7" gutterBottom>
          
        </Typography>
      </Grid>
      <Grid item xs={6} textAlign={"right"} >
        <Button variant="contained" color="primary" style={{margin: "2px"}} disabled={!fetchNextMovie} onClick={getRandomId}>
          Next Question
        </Button>
      </Grid>
    </Grid>

    <Dialog open={showInstruction} onClose={handleClose}>
        <DialogTitle>Game Instructions</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Welcome to the game! For each question, select the movie you think got higher box office collection.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
    </Dialog>
  </>
  );
}
