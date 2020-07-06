import axios from 'axios';

const api = axios.create({
    baseURL: "https://app-covid-fluxo.herokuapp.com/"
});

export default api;
