import axios from 'axios';

export const getEmployees = page => {
  return axios.get(`/api/employees/${page}`);
};
