import React from "react";

const KeyCloakLoginButton = () => {
  const redirectUri = "http://localhost:3000/callback-keycloak";
  const clientId = "website";
  const url = `http://localhost:9090/auth/realms/rick-and-morty-wiki/protocol/openid-connect/auth?client_id=${clientId}&redirect_uri=${redirectUri}&state=b0fc5a0b-37f1-4ddc-bb2d-39e535ecf45b&response_mode=fragment&response_type=code&scope=openid`;
  return <a href={url}>Login</a>;
};

export default KeyCloakLoginButton;
