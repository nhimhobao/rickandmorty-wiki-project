import React from "react";
import { useAuth } from "../AuthContext";
import { loginUrl } from "../urls";
import { Button, CircularProgress, IconButton } from "@material-ui/core";
import ProfileMenu from "./ProfileMenu";

const LoginButton = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <IconButton style={{ color: "white" }}>
        <CircularProgress size={20} />
      </IconButton>
    );
  }
  if (!user) {
    return (
      <Button component="a" href={loginUrl} variant="outlined">
        Login
      </Button>
    );
  }
  return <ProfileMenu user={user} />;
};

export default LoginButton;
