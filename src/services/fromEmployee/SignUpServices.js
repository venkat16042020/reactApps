import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/signup';

export const getAllSignUp = () => axios.get(`${REST_API_BASE_URL}/getAll`);

export const createSignUp = (signup) => axios.post(`${REST_API_BASE_URL}/create`, signup);

export const getSignUpById = (id) => axios.get(`${REST_API_BASE_URL}/${id}`);

export const updateSignUpById = (id, signup) => axios.put(`${REST_API_BASE_URL}/updateSignup/${id}`, signup);

export const deleteSignUpById = (id) => axios.delete(`${REST_API_BASE_URL}/deleteSignup/${id}`);

export const deleteAllSignUp = () => axios.delete(`${REST_API_BASE_URL}/deleteAllSignup`);
