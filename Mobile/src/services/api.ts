import axios from 'axios';

const api = axios.create({
  baseURL: 'http://xxx.xxx.xxx.xx:3333',
});

export default api;
