import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Button, Typography, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import image404 from "../../assets/image404.png";
import {
  pageContainer,
  mainGridContainer,
  messageError,
  homeButtom,
} from "./ErrorStyles";

const Error404 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  const error404Theme = createTheme();

  error404Theme.typography.h3 = {
    fontSize: "1.1rem",
    "@media (min-width:600px)": {
      fontSize: "1.8rem",
    },
    [error404Theme.breakpoints.up("md")]: {
      fontSize: "2.5rem",
    },
  };

  return (
    <ThemeProvider theme={error404Theme}>
      <Grid container sm={12} alignItems="center" sx={pageContainer}>
        <Grid
          container
          item
          sm={12}
          md={8}
          justifyContent="center"
          alignItems="center"
          sx={mainGridContainer}
        >
          <Container
            align="center"
            sx={{
              borderRadius: "25px",
              backgroundColor: "#fafaf4  ",
            }}
          >
            <Grid item xs={12} sm={7}>
              <img src={image404} alt="404" />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography
                variant="h3"
                component="p"
                textAlign="center"
                sx={messageError}
              >
                Oops.. Página no encontrada
              </Typography>
              <Button
                color="error"
                onClick={handleClick}
                variant="contained"
                size="medium"
                sx={homeButtom}
              >
                Ir al inicio
              </Button>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Error404;
