import axios from 'axios';

export const getApparel = page => {
  return axios.get(`/api/apparels/${page}`);
};

export const getApparelByID = id => {
  return axios.get(`/api/apparel/${id}`);
};
