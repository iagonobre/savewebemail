import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://saveemail.herokuapp.com',
});