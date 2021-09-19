export const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
export const clientId = process.env.REACT_APP_SSO_CLIENT_ID;
export const ssoDomain = process.env.REACT_APP_SSO_DOMAIN;
export const redirectUri = `${apiBaseUrl}/callback`;
export const redirectUriLogout = `${apiBaseUrl}/logout`;
