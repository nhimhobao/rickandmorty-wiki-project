import { useAuth } from "./index";
import { toast } from "react-toastify";
import { Link, Typography } from "@material-ui/core";
import React from "react";
import { loginUrl } from "../urls";

const useCheckAuth = () => {
  const { user, isLoading, error } = useAuth();
  const withAuth = (action) => () => {
    if (!isLoading)
      if (error) {
        return toast.error(error.message);
      } else if (!user) {
        return toast.warn(
          <Typography variant="body2">
            You must{" "}
            <Link component="a" href={loginUrl}>
              login
            </Link>{" "}
            to perform this action
          </Typography>
        );
      } else {
        return action();
      }
  };
  return { withAuth };
};

export default useCheckAuth;
