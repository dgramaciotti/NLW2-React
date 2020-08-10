import axios from 'axios';
const URI:string = 'http://localhost:8080';
const api = axios.create({
    baseURL: URI,
});
export default api;