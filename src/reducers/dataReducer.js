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
    OBTENER_COMIC_EXITO
} from '../types';

// State inicial del reducer

const initialState = {
    busqueda: '',
    personajes: [],
    personajesFilt: [],
    personajeSelect: null,
    comics: [],
    loading: false,
    error: null
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case OBTENER_DATA:
        case FILTRAR_BUSQUEDA:
            return {
                ...state,
                loading: true,
                personajesFilt: []
            }
        case OBTENER_DATA_EXITO:
            return {
                ...state,
                personajes: [...state.personajes, action.payload],
                loading: false
            }
        case OBTENER_DATA_ERROR:
        case FILTRAR_BUSQUEDA_ERROR:
        case OBTENER_COMIC_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        case OBTENER_SEARCH_TERM:
            return {
                ...state,
                busqueda: action.payload
            }
        case FILTRAR_BUSQUEDA_EXITO:
            return {
                ...state,
                personajesFilt: [...state.personajesFilt, action.payload],
                personajes: []
            }
        case OBTENER_PERSONAJE:
            return {
                ...state,
                personajeSelect: action.payload,
                comics: []
            }
        case OBTENER_COMIC_EXITO:
            return {
                ...state,
                comics: [...state.comics, action.payload]
            }
        default:
            return state;
    }
}

export default dataReducer;