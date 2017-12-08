import axios from 'axios';

export const getOrderByPage = (page, sortCategory, sortOrder, filter) => {
  console.log(page, sortCategory, sortOrder, filter);
  return axios.get(
    `/api/orders/${page}?category=${sortCategory}&order=${sortOrder}&filter=${filter}`
  );
};

export const getOrderById = id => {
  return axios.get(`/api/order/${id}`);
};

export const editOrder = (orderId, orderInfo) => {
  console.log(orderInfo, orderId);
  return axios.put(`/api/order/${orderId}`, orderInfo);
};

export const deleteOrder = id => {
  return axios.delete(`/api/order/${id}`);
};

export const addOrder = company => {
  return axios.post(`/api/order/`, company);
};
