import axios from 'axios';

export const getOrderByPage = page => {
  return axios.get(`/api/orders/${page}`);
};

export const getOrderById = id => {
  return axios.get(`/api/order/${id}`);
};

export const editOrder = (id, update) => {
  return axios.put(`/api/order/${id}`, update);
};

export const deleteOrder = id => {
  return axios.delete(`/api/order/${id}`);
};
