import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Bookmark } from "@material-ui/icons";
import React from "react";
import { useAuth } from "../AuthContext";
import { toast } from "react-toastify";
import AxiosManager from "../../managers/AxiosManager";
import { useMutation } from "react-query";
import useCheckAuth from "../AuthContext/useCheckAuth";

export const BookmarkButton = ({ characterId }) => {
  const { withAuth } = useCheckAuth();
  const { isLoading, error } = useAuth();
  const { mutateAsync } = useMutation(
    "bookmarks",
    () => {
      const client = AxiosManager.createAuthClient();
      return client.post("/likes", { characterId });
    },
    {
      onSuccess: () => toast.success("Bookmarked"),
    }
  );
  const onClick = () => {
    return mutateAsync({});
  };
  return (
    <IconButton
      aria-label="settings"
      onClick={withAuth(onClick)}
      disabled={isLoading || error}
    >
      <Bookmark color="disabled" />
    </IconButton>
  );
};
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
