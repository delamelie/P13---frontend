import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001/api/v1",
});

export const LOGIN_URL = "/user/login";
export const PROFILE_URL = "/user/profile";
