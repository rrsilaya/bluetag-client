import axios from 'axios';

export const getLogs = page => {
  return axios.get(`/api/logs/${page}`);
};
