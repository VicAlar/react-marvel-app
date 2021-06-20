import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/'
});

export default clienteAxios;