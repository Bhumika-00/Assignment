import axios from 'axios';

const API_URL = 'https://reqres.in/api';

// Fetch user by ID
export const getUserById = (id) => axios.get(`${API_URL}/users/${id}`);

// Update user by ID
export const updateUser = (id, data) => axios.put(`${API_URL}/users/${id}`, data);

// Delete user by ID
export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);

// Login API call
export const login = (data) => axios.post(`${API_URL}/login`, data);

// Get users with pagination
export const getUsers = (page) => axios.get(`${API_URL}/users?page=${page}`);
