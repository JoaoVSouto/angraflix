import axios from 'axios';

const isDev = process.env.NODE_ENV === 'development';

const api = axios.create({
  baseURL: isDev
    ? 'http://localhost:3333/'
    : 'https://angraflix.herokuapp.com/',
});

export default api;
