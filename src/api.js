import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const register = async (username, password, isAdmin) => {
  return await axios.post(`${API_URL}/auth/register`, { username, password, isAdmin });
};

export const login = async (username, password) => {
  return await axios.post(`${API_URL}/auth/login`, { username, password });
};

export const getTrains = async (source, destination) => {
  return await axios.get(`${API_URL}/trains`, { params: { source, destination } });
};

export const bookSeat = async (train_id, token) => {
  return await axios.post(`${API_URL}/book`, { train_id }, { headers: { Authorization: `Bearer ${token}` } });
};

export const getBookingDetails = async (booking_id, token) => {
  return await axios.get(`${API_URL}/bookings/${booking_id}`, { headers: { Authorization: `Bearer ${token}` } });
};
