export const LS_AUTH_KEY = "ram-wiki:token";

export class LocalStorageManager {
  static set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static remove(key) {
    localStorage.removeItem(key);
  }

  static get(key) {
    try {
      const dataString = localStorage.getItem(key);
      return JSON.parse(dataString);
    } catch (error) {
      localStorage.removeItem(key);
    }
  }
}
