import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  // baseURL: "https://baxsocialmedia-be.vercel.app/api/v1",
});

export function setAuthToken(token: string) {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
}
