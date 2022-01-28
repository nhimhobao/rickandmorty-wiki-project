import React from "react";
import { AppBar, Box, Button, Container, Toolbar } from "@material-ui/core";
import LoginButton from "./LoginButton";
import banner from "./banner.svg";
import { Link } from "@reach/router";
import { bookmarksUrl } from "../urls";
import KeyCloakLoginButton from "./KeyCloakLoginButton";
const Headers = () => {
  return (
    <AppBar color="inherit" position="absolute" variant="outlined">
      <Container maxWidth="md">
        <Toolbar>
          <Box component="span" mr={2}>
            <Link to="/">
              <img
                src={banner}
                alt=""
                style={{ height: 60, padding: "4px 0" }}
              />
            </Link>
          </Box>
          <Button component={Link} to={bookmarksUrl} variant="outlined">
            Bookmarks
          </Button>
          <Box flexGrow={1} />
          <KeyCloakLoginButton />
          <LoginButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Headers;
