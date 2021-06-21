import {
    OBTENER_DATA,
    OBTENER_DATA_EXITO,
    OBTENER_DATA_ERROR,
    OBTENER_SEARCH_TERM,
    FILTRAR_BUSQUEDA,
    FILTRAR_BUSQUEDA_EXITO,
    FILTRAR_BUSQUEDA_ERROR,
    OBTENER_PERSONAJE,
    OBTENER_COMIC_ERROR,
    OBTENER_COMIC_EXITO,
    ADD_FAV,
    REMOVE_FAV
} from '../types';

import clienteAxios from '../api/axios';
import { Secrets } from '../secret';

const { ts, hash, publicKey } = Secrets;

// Funcion para obtener Personajes

export function getCharactersAction() {
    return async (dispatch) => {
        dispatch(getCharacters()); 
        const o = Math.floor(Math.random() * 500);

        try {
            await clienteAxios.get('/characters?orderBy=modified', {
                params: {
                    'apikey': publicKey,
                    'ts': ts,
                    'hash': hash,
                    'offset': o,
                    'limit': '12',               
                }
            }).then((response) => {
                const res = response.data.data.results;
                
                dispatch( getCharacterSuccess(res));
            });
        } catch (error) {
            console.log(error);
            dispatch( getCharactersError());
        }
    }
}

const getCharacters = () => ({
    type: OBTENER_DATA,
    payload: true
});

const getCharacterSuccess = (res) => ({
    type: OBTENER_DATA_EXITO,
    payload: res
});

const getCharactersError = () => ({
    type: OBTENER_DATA_ERROR
});

export function getSearchTermAction(term) {
    return (dispatch) => {
        dispatch(getSearchTerm(term));
    }
}

//Filtrar busqueda

const getSearchTerm = (term) => ({
    type: OBTENER_SEARCH_TERM,
    payload: term
});

export function filterSearchAction(term) {
    return async (dispatch) => {
        dispatch(filterSearch());

        try {
            await clienteAxios.get(`characters?nameStartsWith=${term}`, {
                params: {
                    'apikey': publicKey,
                    'ts': ts,
                    'hash': hash,
                    'limit': '12',               
                }
            }).then((response) => {
                const res = response.data.data.results;

                dispatch( filterCharactersSuccess(res));
            });
        } catch (error) {
            console.log(error);
            dispatch ( filterCharactersError());
        }
    }
}

const filterSearch = () => ({
    type: FILTRAR_BUSQUEDA,
    payload: true
});

const filterCharactersSuccess = (res) => ({
    type: FILTRAR_BUSQUEDA_EXITO,
    payload: res
});

const filterCharactersError = () => ({
    type: FILTRAR_BUSQUEDA_ERROR
});


//Obtener el personaje para el modal y sus comics

export function getCharacterIdAction(personaje) {
    return async (dispatch) => {
        dispatch( getId(personaje));

        try {
            await clienteAxios.get(`characters/${personaje.id}/comics?orderBy=onsaleDate`, {
                params: {
                    'apikey': publicKey,
                    'ts': ts,
                    'hash': hash               
                }
            }).then((response) => {
                const res = response.data.data.results;
                dispatch( getComicsSucces(res));
            });
        } catch (error) {
            console.log(error);
            dispatch( getComicsError());
        }
    }
}

const getId = (personaje) => ({
    type: OBTENER_PERSONAJE,
    payload: personaje
});

const getComicsSucces = res => ({
    type: OBTENER_COMIC_EXITO,
    payload: res
});

const getComicsError = () => ({
    type: OBTENER_COMIC_ERROR
});

//Añadir a favoritos

export function addFavoriteAction(personaje) {
    return (dispatch) => {
        dispatch( addFavorite(personaje));
    }
}

const addFavorite = (personaje) => ({
    type: ADD_FAV,
    payload: personaje
});

//Remover de favoritos

export function removeFavoriteAction(personaje) {
    return (dispatch) => {
        dispatch( removeFavorite(personaje));
    }
}

const removeFavorite = (personaje) => ({
    type: REMOVE_FAV,
    payload: personaje
});