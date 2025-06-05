import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'x-api-key': 'reqres-free-v1',
  },
});

export default api;

/*Register
eve.holt@reqres.in
pistol

Login
eve.holt@reqres.in
cityslicka*/