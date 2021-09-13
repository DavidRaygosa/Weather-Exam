import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3700/api';

const requestGenerico = {
    get: (url) => axios.get(url)
};

export default requestGenerico;

/* 
,
    post: (url, body) => axios.post(url, body),
    put: (url, body) => axios.put(url, body),
    delete: (url) => axios.delete(url)
*/