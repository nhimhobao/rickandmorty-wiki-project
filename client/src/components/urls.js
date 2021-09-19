import { clientId, redirectUri, redirectUriLogout, ssoDomain } from "../config";

const createLoginUrl = () => {
  const scope = "openid profile";
  return `${ssoDomain}/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
};
export const loginUrl = createLoginUrl();
const createLogoutUrl = () => {
  return `${ssoDomain}/v2/logout?client_id=${clientId}&returnTo=${redirectUriLogout}`;
};
export const logoutUrl = createLogoutUrl();

export const bookmarksUrl = "/bookmarks";
