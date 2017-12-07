import axios from 'axios';

export const getDiscounts = apparel => {
  return axios.get(`/api/discounts/${apparel}`);
};

export const editDiscount = (id, discountInfo) => {
  return axios.put(`api/discount/${id}`, discountInfo);
};

export const deleteDiscount = id => {
  return axios.delete(`api/discount/${id}`);
};
