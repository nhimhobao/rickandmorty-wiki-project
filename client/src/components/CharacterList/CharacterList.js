import React from "react";
import { Grid } from "@material-ui/core";
import { Character } from "./Character";
import EmptyList from "./EmptyList";

const CharacterList = ({ characters }) => {
  return characters.length > 0 ? (
    <Grid spacing={1} container>
      {characters.map((character) => (
        <Grid mb={1} item lg={4} md={4} sm={6} xs={12}>
          <Character key={character.id} character={character} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <EmptyList />
  );
};
export default CharacterList;
