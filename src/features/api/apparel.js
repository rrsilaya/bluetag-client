import axios from 'axios';

export const getApparel = (page, search) => {
  return axios.get(
    `/api/apparels/${page}?label=${search.label}&q=${search.q}&classification=${search.classification}&category=${search.category}&order=${search.order}`
  );
};

export const getApparelByID = id => {
  return axios.get(`/api/apparel/${id}`);
};

export const addApparel = apparel => {
  return axios.post('/api/apparel', apparel);
};

export const editApparel = (id, apparelInfo) => {
  return axios.put(`/api/apparel/${id}`, apparelInfo);
};

export const deleteApparel = id => {
  return axios.delete(`api/apparel/${id}`);
};
