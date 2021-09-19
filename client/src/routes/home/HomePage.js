import React from "react";
import { Box, CircularProgress, Typography } from "@material-ui/core";
import { useInfiniteQuery } from "react-query";
import AxiosManager from "../../managers/AxiosManager";
import _flatten from "lodash/flatten";
import handleLoadingAndError from "../../components/handleLoadingAndError";
import InfiniteScroll from "react-infinite-scroller";
import CharacterList from "./CharacterList";
const Homepage = () => {
  const resp = useInfiniteQuery(
    "characters",
    ({ pageParam = 1 }) =>
      AxiosManager.createClient().get(`/characters?page=${pageParam}`),
    {
      getNextPageParam(lastPage, pages) {
        return lastPage.data.hasMore ? lastPage.data.page + 1 : undefined;
      },
    }
  );
  return (
    handleLoadingAndError(resp) || (
      <Box>
        <Typography component="h1" variant="h6" gutterBottom>
          Rick and Morty characters
        </Typography>
        <InfiniteScroll
          loadMore={resp.fetchNextPage}
          hasMore={resp.hasNextPage}
          loader={
            <Box py={2} display="flex" justifyContent="space-around">
              <CircularProgress color="primary" />
            </Box>
          }
        >
          <CharacterList
            characters={_flatten(
              resp.data.pages.map((page) => page.data.items)
            )}
          />
        </InfiniteScroll>
      </Box>
    )
  );
};

export default Homepage;
