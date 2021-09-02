import axios from "axios"

const API = axios.create({baseURL:"/api"})

export const signIn = (formData) => API.post('/signin', formData);
export const signUp = (formData) => API.post('/signup', formData);

export const enquiry = (formData) => API.post('/enquiry',formData);