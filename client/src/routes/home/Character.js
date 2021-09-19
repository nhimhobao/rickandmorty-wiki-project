import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Link,
  Typography,
} from "@material-ui/core";
import { Bookmark } from "@material-ui/icons";
import React from "react";
import { useAuth } from "../../components/AuthContext";
import { toast } from "react-toastify";
import { loginUrl } from "../../components/urls";
import AxiosManager from "../../managers/AxiosManager";
import { useMutation } from "react-query";

export const BookmarkButton = ({ characterId }) => {
  const { user, isLoading, error } = useAuth();
  const { mutateAsync } = useMutation("bookmarks", () => {
    const client = AxiosManager.createAuthClient();
    return client.post("/likes", { characterId });
  });
  const onClick = () => {
    if (!user) {
      return toast.warn(
        <Typography variant="body2">
          You must{" "}
          <Link component="a" href={loginUrl}>
            login
          </Link>{" "}
          to perform this action
        </Typography>
      );
    }
    return mutateAsync({});
  };
  return (
    <IconButton
      aria-label="settings"
      onClick={onClick}
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
      ></CardHeader>
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
