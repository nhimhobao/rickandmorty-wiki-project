import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@material-ui/core";
import React from "react";
import BookmarkButton from "./BookmarkButton";

export const Character = ({ character }) => {
  return (
    <Card variant="outlined">
      <CardHeader
        title={character.name}
        avatar={<Avatar src={character.image} alt={character.name} />}
        subheader={
          <Typography variant="caption" color="textSecondary">
            {character.gender}
            {" · "}
            {character.species}
            {" · "}
            {character.status}
          </Typography>
        }
        action={<BookmarkButton characterId={character.id} />}
      />
      <Divider />
      <CardContent>
        <Typography variant="subtitle2">
          Origin: {character.origin.name}.
        </Typography>
        <Typography variant="subtitle2">
          Current location: {character.location.name}
        </Typography>
      </CardContent>
    </Card>
  );
};
