import React, { useContext } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import {
  LocalStorageManager,
  LS_AUTH_KEY,
} from "../../managers/LocalStorageManager";
import { apiBaseUrl } from "../../config";

export const AuthContext = React.createContext({});

const AuthContextProvider = (props) => {
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
      retryOnMount: false,
      retry: false,
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
    user: isLoading || error ? null : data,
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
