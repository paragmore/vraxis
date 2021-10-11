import axios from "axios";

const API = axios.create({ baseURL: "/api" });

export const signIn = (formData) => API.post("/signin", formData);
export const signUp = (formData) => API.post("/signup", formData);

export const enquiry = (formData) => API.post("/enquiry", formData);
export const upload2d = (formData, token) =>
  API.post(`/upload2d`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
export const myprojects = (token) =>
  API.get(`/myprojects`, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

  export const getproject = (token,projectId) =>
  API.get(`/project?projectId=${projectId}`, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

export const googlesignup = (result, token) =>
  API.post(`/googlesignup`, result, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

export const myprofile = (token) =>
  API.get(`/myprofile`, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
export const paymentInfo = (token) =>
  API.get(`/payInfo`, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
