import React from "react";
import { parse } from "query-string";
import { Redirect, useLocation } from "@reach/router";
import {
  LocalStorageManager,
  LS_AUTH_KEY,
} from "../../managers/LocalStorageManager";

const CallbackPage = () => {
  const location = useLocation();
  const query = parse(location.search);
  const token = JSON.parse(atob(query.data));
  LocalStorageManager.set(LS_AUTH_KEY, token);
  return <Redirect to="/" noThrow />;
};

export default CallbackPage;
