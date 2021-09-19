import React from "react";
import CharacterList from "../../components/CharacterList/CharacterList";
import { useQuery } from "react-query";
import AxiosManager from "../../managers/AxiosManager";
import handleLoadingAndError from "../../components/handleLoadingAndError";
import { Typography } from "@material-ui/core";
import { withAuth } from "../../components/AuthContext/withAuth";
import CharacterListPlaceholder from "../../components/CharacterList/CharacterListPlaceholder";

const BookmarksPage = () => {
  const resp = useQuery(["bookmarks"], () => {
    const client = AxiosManager.createAuthClient();
    return client.get("/likes/mine");
  });

  return (
    handleLoadingAndError(resp, {
      loadingPlaceholder: <CharacterListPlaceholder />,
    }) || (
      <div>
        <Typography component="h1" variant="h6" gutterBottom>
          My bookmarks
        </Typography>
        <CharacterList characters={resp.data.data.items} />
      </div>
    )
  );
};

export default withAuth()(BookmarksPage);
