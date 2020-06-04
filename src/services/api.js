import axios from 'axios';

const api = axios.create({
  baseURL: 'https://saveemail.herokuapp.com',
});

export default api;