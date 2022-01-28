import React, { useContext } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import {
  LocalStorageManager,
  LS_AUTH_KEY,
  LS_PROFILE,
} from "../../managers/LocalStorageManager";
import { apiBaseUrl } from "../../config";

export const AuthContext = React.createContext({});

const AuthContextProvider = (props) => {
  const cachedUser = LocalStorageManager.get(LS_PROFILE);
  const { data, error, isLoading } = useQuery(
    ["profile"],
    () => {
      const token = LocalStorageManager.get(LS_AUTH_KEY);
      if (!token) return null;
      const client = axios.create({
        baseURL: apiBaseUrl,
        headers: {
          Authorization: `Bearer ${token.id_token}`,
        },
      });
      return client.get("/profile").then((resp) => resp.data.user);
    },
    {
      enabled: !cachedUser,
      retryOnMount: false,
      retry: false,
      onSuccess: (data) => {
        if (data) {
          const expireAt = data.exp;
          LocalStorageManager.set(LS_PROFILE, data, { expireAt });
        }
      },
      onError: (error) => {
        if (error.response && error.response.status === 401) {
          LocalStorageManager.remove(LS_AUTH_KEY);
        } else {
          throw error;
        }
      },
    }
  );
  const context = {
    user: cachedUser || (isLoading || error ? null : data),
    isLoading,
    error,
  };

  return (
    <AuthContext.Provider value={context}>
      <div>{props.children}</div>
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContextProvider;
