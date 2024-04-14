import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/items';

export const getAllItems = () => axios.get(`${REST_API_BASE_URL}/getAll`);

export const addItem = (Item) => axios.post(`${REST_API_BASE_URL}/add`, Item);

export const getItemById = (id) => axios.get(`${REST_API_BASE_URL}/${id}`);

export const updateItemById = (id, Item) => axios.put(`${REST_API_BASE_URL}/update/${id}`, Item);

export const deleteItemById = (id) => axios.delete(`${REST_API_BASE_URL}/delete/${id}`);



export const deleteAllItems = () => axios.delete(`${REST_API_BASE_URL}/deleteAll`);

