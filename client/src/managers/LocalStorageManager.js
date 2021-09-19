export const LS_AUTH_KEY = "ram-wiki:token";

export class LocalStorageManager {
  static set = (key, data) => localStorage.setItem(key, JSON.stringify(data));
  static remove = (key) => localStorage.removeItem(key);

  static get(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      localStorage.removeItem(key);
    }
  }
}
