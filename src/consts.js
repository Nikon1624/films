import axios from 'axios';

const HTTP = axios.create({
    baseURL: 'https://floating-sierra-20135.herokuapp.com/api',
    responseType: 'json'
});

const API_ENDPOINT = {
    FILMS: '/movies',
    FILM: '/movie/'
};

export {HTTP, API_ENDPOINT};
