export const clientUrl = process.env.CLIENT_URL || "http://localhost:3000";
export const clientUrlCallback = `${clientUrl}/callback`;
export const clientUrlLogout = `${clientUrl}/logout`;
export const authDomain = process.env.AUTH_DOMAIN;
export const authClientId = process.env.AUTH_CLIENT_ID;
export const authClientSecret = process.env.AUTH_CLIENT_SECRET;
export const authRedirectUri = process.env.AUTH_REDIRECT_URI;
