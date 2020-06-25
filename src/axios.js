import axios from 'axios';

export function create() {
    axios.defaults.baseURL = 'http://localhost:8080';
    axios.defaults.headers.common.Accept = 'application/json';

    axios.interceptors.request.use(async (r) => {
      const token = localStorage.getItem('token');
      if (token) {
        r.headers.authorization = `Bearer ${token}`;
      }
      return r;
    });
    
}