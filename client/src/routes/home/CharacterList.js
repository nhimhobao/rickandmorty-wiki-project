import React from "react";
import { Grid } from "@material-ui/core";
import { Character } from "./Character";

const CharacterList = ({ characters }) => {
  return (
    <Grid spacing={1} container>
      {characters.map((character) => (
        <Grid mb={1} item lg={4} md={4} sm={6} xs={12}>
          <Character key={character.id} character={character} />
        </Grid>
      ))}
    </Grid>
  );
};
export default CharacterList;
