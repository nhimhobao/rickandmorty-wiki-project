import axios from "axios";
import { apiBaseUrl } from "../config";
import { LocalStorageManager, LS_AUTH_KEY } from "./LocalStorageManager";

class AxiosManager {
  static createAuthClient() {
    const token = LocalStorageManager.get(LS_AUTH_KEY);
    if (token && token.id_token)
      return axios.create({
        baseURL: apiBaseUrl,
        headers: {
          Authorization: `Bearer ${token.id_token}`,
        },
      });
    return null;
  }
  static createClient() {
    return axios.create({
      baseURL: apiBaseUrl,
    });
  }
}
export default AxiosManager;
