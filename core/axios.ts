import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/', // Указывает базовый URL при запросах с помошью axios!
})

export default instance;
