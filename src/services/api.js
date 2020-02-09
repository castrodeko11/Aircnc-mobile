import axios from 'axios'

const api = axios.create({
    // baseURL:'http://192.168.1.37:3333',
    baseURL:'https://deploy-aircnc-backend.herokuapp.com',
});

export default api;