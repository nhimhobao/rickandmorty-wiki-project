import React from "react";
import handleLoadingAndError from "../handleLoadingAndError";
import { Container, Link } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { loginUrl } from "../urls";
import { useAuth } from "./index";

export const withAuth = () => (WrappedComponent) => (props) => {
  const { user, isLoading, error } = useAuth();
  if (isLoading || error) {
    return handleLoadingAndError({ isLoading, error });
  }
  if (!user) {
    return (
      <Container maxWidth="sm">
        <Alert severity="warning" variant="outlined">
          <AlertTitle>Error</AlertTitle>
          You must{" "}
          <Link component="a" href={loginUrl}>
            login
          </Link>{" "}
          to access this page
        </Alert>
      </Container>
    );
  }
  return <WrappedComponent {...props} />;
};
