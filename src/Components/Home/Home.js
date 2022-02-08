import React from 'react';
import {Typography,Box,Container,Paper} from '@mui/material'

const Home = () => {
  return <>
       <Box
        sx={{
          background: '#a4a4a4',
  
        }}>
          
       <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '1rem',
        }}>
       <Typography variant="h1" component="div" gutterBottom>
        Pokedex
      </Typography>
          <Paper sx={{ marginBlock: '2rem', paddingBottom: '2rem' }}>
                <h2>bienvenido a la pokedex</h2>
          </Paper>
      </Container>
      </Box>
  </>;
};

export default Home;
