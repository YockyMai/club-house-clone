import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001", // Указывает базовый URL при запросах с помошью axios!
});

export default instance;
