import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const PokemonCard = ({ pokemon }) => {
  const { name, types, sprites, id } = pokemon;
  const type = types[0].typename;

  return (
    <Grid key={pokemon.id} item md={4} sm={6} xs={12}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="120"
          image={sprites.front_default}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {type}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">ver mas</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
