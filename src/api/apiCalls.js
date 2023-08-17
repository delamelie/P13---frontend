import axios, { LOGIN_URL, PROFILE_URL } from "./apiPaths";

export const loginUserApi = async (credentials) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await axios.post(LOGIN_URL, credentials, { headers });
  return response.data;
};

export const displayUserApi = async (token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  const response = await axios.post(PROFILE_URL, {}, { headers });
  return response.data;
};

export const updateUserApi = async (token, updatedData) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  const response = await axios.put(PROFILE_URL, updatedData, { headers });
  return response.data;
};
