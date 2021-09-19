import React from "react";
import { Box, Container } from "@material-ui/core";
import Headers from "./Header";

const Layout = (props) => {
  return (
    <Container maxWidth="md">
      <Headers />
      <Box py={12}>{props.children}</Box>
    </Container>
  );
};
export default Layout;
