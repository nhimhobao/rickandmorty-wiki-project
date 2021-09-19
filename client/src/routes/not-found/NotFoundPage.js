import React from "react";
import Layout from "../../components/Layout";
import { Typography } from "@material-ui/core";
const NotFoundPage = () => {
  return (
    <Layout>
      <Typography component="h1" variant="h4">
        404 Not found
      </Typography>
    </Layout>
  );
};

export default NotFoundPage;
