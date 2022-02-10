import React from 'react'
import { Grid, Typography, Container } from "@mui/material";
import loading from '../../../assets/loading.png';

const PokeLoading = () => {
  return (
    <Container
            align="center"
            sx={{
              borderRadius: "25px",
              backgroundColor: "#fafaf4  ",
            }}
          >
            <Grid item xs={12} sm={7}>
              
              <img src={loading } alt=""  />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography
                variant="h3"
                component="p"
                textAlign="center"
              >
                Cargando...
              </Typography>
            </Grid>
          </Container>
  )
}

export default PokeLoading