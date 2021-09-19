import React from "react";
import { Redirect } from "@reach/router";
import {
  LocalStorageManager,
  LS_AUTH_KEY,
} from "../../managers/LocalStorageManager";
const LogoutPage = () => {
  LocalStorageManager.remove(LS_AUTH_KEY);
  return <Redirect to="/" noThrow />;
};

export default LogoutPage;
