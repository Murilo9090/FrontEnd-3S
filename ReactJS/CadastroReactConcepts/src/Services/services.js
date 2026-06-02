import axios from "axios";


const apiPort = "http://localhost:3000";

const localApi = 'http://localhost:{apiport}';

const externalApi = null

const api = axios.create({
    baseURL: apiPort,
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
});

export default api