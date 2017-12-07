import axios from 'axios';

export const getStocks = apparel => {
  return axios.get(`/api/stocks/${apparel}`);
};

export const addStock = stock => {
  return axios.post('/api/stock', stock);
};

export const editStock = (id, stockInfo) => {
  return axios.put(`/api/stock/${id}`, stockInfo);
};

export const deleteStock = id => {
  return axios.delete(`api/stock/${id}`);
};
