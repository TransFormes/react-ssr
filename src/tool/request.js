import axios from 'axios';
export const instance = axios.create({
  baseURL: 'http://localhost:3030/',
  timeout: 5000,
  proxy:{
    host: 'http://127.0.0.1',
    port: 3030,
  }
})