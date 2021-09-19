import React from "react";
import { Grid } from "@material-ui/core";
import CharacterPlaceholder from "./CharacterPlaceholder";
const CharacterListPlaceholder = () => {
  return (
    <Grid spacing={1} container>
      {[1, 2, 3, 4].map((i) => (
        <Grid mb={1} item lg={4} md={4} sm={6} xs={12} key={i}>
          <CharacterPlaceholder />
        </Grid>
      ))}
    </Grid>
  );
};
export default CharacterListPlaceholder;
