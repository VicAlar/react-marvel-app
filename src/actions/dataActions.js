import {
    OBTENER_DATA,
    OBTENER_DATA_EXITO,
    OBTENER_DATA_ERROR
} from '../types';

import clienteAxios from '../api/axios';
import { Secrets } from '../secret';

const { ts, hash, publicKey } = Secrets;

// Funcion para obtener Personajes

export function getCharactersAction() {
    return async (dispatch) => {
        dispatch(getCharacters()); 
        const o = Math.floor(Math.random() * 500);;

        try {
            await clienteAxios.get('/characters?orderBy=modified', {
                params: {
                    'apikey': publicKey,
                    'ts': ts,
                    'hash': hash,
                    'offset': o,
                    'limit': '8',               
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
})
