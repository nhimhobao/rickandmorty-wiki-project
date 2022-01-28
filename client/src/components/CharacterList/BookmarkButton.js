import useCheckAuth from "../AuthContext/useCheckAuth";
import { useAuth } from "../AuthContext";
import { useMutation } from "react-query";
import AxiosManager from "../../managers/AxiosManager";
import { toast } from "react-toastify";
import { IconButton } from "@material-ui/core";
import { Bookmark } from "@material-ui/icons";
import React from "react";

const BookmarkButton = ({ characterId }) => {
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

export default BookmarkButton;
