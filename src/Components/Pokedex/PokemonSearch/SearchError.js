import React from 'react'
import { Grid, Typography, Container } from "@mui/material";
import searchError from '../../../assets/searchError.png';

const SearchError = () => {
  return (
    <Container
            align="center"
            sx={{
              borderRadius: "25px",
              backgroundColor: "#fafaf4  ",
            }}
          >
            <Grid item xs={12} sm={7}>
              <img src={searchError} style={{height:'%100',width:'100%'}}alt="" />
            </Grid>

            
            <Grid item xs={12} sm={5}>
              <Typography
                variant="h3"
                component="p"
                textAlign="center"
                style={{height:'%100',width:'100%'}}
              >
                Oops.. No se puedo encontrar el Pokemon
              </Typography>
            </Grid>
          </Container>
  )
}

export default SearchError