export const LS_AUTH_KEY = "ram-wiki:token";
export const LS_PROFILE = "ram-wiki:profile";

export class LocalStorageManager {
  static set = (key, data, options) => {
    localStorage.setItem(
      key,
      JSON.stringify({ data, expireAt: options?.expireAt })
    );
  };
  static remove = (key) => localStorage.removeItem(key);

  static get(key) {
    try {
      const item = JSON.parse(localStorage.getItem(key));
      const { data, expiredAt } = item;
      if (Math.floor(Date.now() / 1000) >= expiredAt) {
        return null;
      }
      return data;
    } catch (error) {
      localStorage.removeItem(key);
    }
  }
}
