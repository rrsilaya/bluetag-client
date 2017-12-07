import axios from 'axios';

export const getOrderByPage = page => {
  return axios.get(`/api/orders/${page}`);
};

export const getOrderById = id => {
  return axios.get(`/api/order/${id}`);
};

export const editOrder = (orderId, orderInfo) => {
  return axios.put(`/api/order/${orderId}`, orderInfo);
};

export const deleteOrder = id => {
  return axios.delete(`/api/order/${id}`);
};
