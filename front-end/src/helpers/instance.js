import axios from 'axios';
import "dotenv/config";

const HOST = (
  process.env.REACT_APP_API_HOST 
  || `${process.env.REACT_APP_HOSTNAME}:${process.env.REACT_APP_BACKEND_PORT}`
  || 'localhost:3001'
  );
const PROTOCOL = process.env.REACT_APP_API_PROTOCOL || 'http';

const instance = axios.create({
  baseURL: `${PROTOCOL}://${HOST}`,
});

export const requestData = async (endpoint, options = {}) => {
  const { data } = await instance.get(endpoint, options);
  return data;
};

export default instance;
