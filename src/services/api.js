import axios from 'axios';

const api = axios.create({
  baseURL: 'http://saveemail.herokuapp.com',
});

export default api;