import axios from 'axios';

export const getLogs = (page, sortCategory, sortOrder) => {
  return axios.get(
    `/api/logs/${page}?category=${sortCategory}&order=${sortOrder}`
  );
};

export const getLog = id => {
  return axios.get(`/api/log/${id}`);
};
