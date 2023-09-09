import React from 'react';
import { Container, Typography, Grid, Paper, IconButton } from '@mui/material';
import myImage from '../../src/assets/lohith.jpg';
import { GitHub, Twitter, LinkedIn, Instagram } from '@mui/icons-material';


const socialMediaLinks = {
    lohith: {
      github: 'https://github.com/kslohith',
      linkedin: 'https://www.linkedin.com/in/lohithks/',
      instagram: 'https://www.instagram.com/ks_lohith/',
    }
  };

const AboutUs = () => {
  return (
    <Container>
      <Typography variant="h8" gutterBottom>
        App designed for the Mobile Application and Services Course at Georgia Tech
      </Typography>

      <Grid container spacing={3}>
        {/* Team Member 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <img
              src={myImage} // Replace with team member image
              alt="Lohith"
              style={{ width: '100%', borderRadius: '50%' }}
            />
            <Typography>
                Lohith
            </Typography>
            <div>
              <IconButton
                component="a"
                href={socialMediaLinks.lohith.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub />
              </IconButton>
              <IconButton
                component="a"
                href={socialMediaLinks.lohith.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component="a"
                href={socialMediaLinks.lohith.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </IconButton>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
