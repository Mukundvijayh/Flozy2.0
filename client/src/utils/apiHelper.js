import axios from "axios";
import { getAccessToken } from "./appHelper";
const API_HOST = process.env.REACT_APP_API_HOST;

export const getRequest = async (url, options = {}) => {
  return await axios.get(API_HOST + url, {
    ...(options || {}),
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      ...(options.headers || {}),
    },
  });
};

export const postRequest = async (url, data = {}, options = {}) => {
  return await axios.post(API_HOST + url, data, {
    ...(options || {}),
    headers: {
      ...(options.headers || {}),
    },
  });
};
