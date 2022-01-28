import React from "react";
import { Redirect, useLocation } from "@reach/router";
import queryString from "query-string";
import { useQuery } from "react-query";
import axios from "axios";
import {
  LocalStorageManager,
  LS_AUTH_KEY,
} from "../../managers/LocalStorageManager";
import handleLoadingAndError from "../../components/handleLoadingAndError";

const CallbackKeycloakPage = () => {
  const location = useLocation();
  const parsed = queryString.parse(location.hash);
  const { code } = parsed;
  const resp = useQuery(
    "code",
    () => {
      return axios.get(`http://localhost:8080/callback-keycloak?code=${code}`);
    },
    {
      onSuccess: (resp) => {
        LocalStorageManager.set(LS_AUTH_KEY, { id_token: resp.data.id_token });
      },
    }
  );

  return handleLoadingAndError(resp) || <Redirect to="/" noThrow />;
};

export default CallbackKeycloakPage;
