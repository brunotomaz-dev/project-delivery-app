import axios from 'axios';

const HOST = process.env.REACT_APP_API_HOST || 'localhost:3001';
const PROTOCOL = process.env.REACT_APP_API_PROTOCOL || 'http';

const instance = axios.create({
  baseURL: `${PROTOCOL}://${HOST}`,
});

export const requestData = async (endpoint, options = {}) => {
  const { data } = await instance.get(endpoint, options);
  return data;
};

export default instance;
