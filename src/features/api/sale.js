import axios from 'axios';

export const getSales = apparel => {
  return axios.get(`/api/sales/${apparel}`);
};

export const addSale = (apparel, sale) => {
  return axios.post(`/api/sale/${apparel}`, sale);
};

export const deleteSale = id => {
  return axios.delete(`api/sale/${id}`);
};
