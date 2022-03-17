import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000', // Указывает базовый URL при запросах с помошью axios!
    withCredentials: true
})

export default instance;
