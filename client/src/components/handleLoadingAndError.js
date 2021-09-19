import { Box, CircularProgress, Container } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import React from "react";

function handleLoadingAndError(resp, options) {
  const { loadingPlaceholder } = options || {};
  if (resp.isLoading)
    return (
      loadingPlaceholder || (
        <Box display="flex" justifyContent="space-around">
          <CircularProgress />
        </Box>
      )
    );
  if (resp.error)
    return (
      <Container maxWidth="sm">
        <Alert severity="error" variant="outlined">
          <AlertTitle>Error</AlertTitle>
          {resp.error.message}
        </Alert>
      </Container>
    );
  return null;
}

export default handleLoadingAndError;
