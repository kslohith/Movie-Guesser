import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';

const InfoCard = (props) => {
    const {movie, boxOffice, revealBoxOffice } = props;

    const ImageButton = styled(ButtonBase)(({ theme }) => ({
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('sm')]: {
          width: '100% !important', // Overrides inline-style
          height: 100,
        },
        '&:hover, &.Mui-focusVisible': {
          zIndex: 1,
          '& .MuiImageBackdrop-root': {
            opacity: 0.15,
          },
          '& .MuiImageMarked-root': {
            opacity: 0,
          },
          '& .MuiTypography-root': {
            border: '4px solid currentColor',
          },
        },
      }));
      
      const ImageSrc = styled('span')({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      });
      
      const Image = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
      }));
      
      const ImageBackdrop = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
      }));
      
      const ImageMarked = styled('span')(({ theme }) => ({
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
      }));

      const showAnswerAndIncrementPoint = () => {
        revealBoxOffice(movie);
      }

  return (
    <Card elevation={3}>
      <Grid container>
        <Grid item xs={12} sm={4}>
        <ImageButton
          focusRipple
          key={movie ? movie.Title: ''}
          style={{
            width: "100%",
          }}
          onClick={showAnswerAndIncrementPoint}
        >
          <ImageSrc style={{ backgroundImage: `url(${movie ? movie.Poster: ''})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              Select
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
        </Grid>

        <Grid item xs={8}>
          <CardContent>
          <Typography variant="h8">
              {movie ? movie.Title: ''}
            </Typography>
            <Typography variant="body2">
              {movie ? movie.Genre: ''}
            </Typography>
            <Typography variant="body2">
              {movie ? movie.Year: ''}
            </Typography>
            <Typography variant="h5" hidden={!boxOffice}>
              {movie ? movie.BoxOffice: ''}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default InfoCard;
