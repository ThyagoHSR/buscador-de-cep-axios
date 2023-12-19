import axios from 'axios';
import axios from 'axios/dist/axios.min.js';


// 08290001/json/

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws'
})

export default api;