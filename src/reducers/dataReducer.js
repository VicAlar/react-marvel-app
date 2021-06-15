import {
    OBTENER_DATA,
    OBTENER_DATA_ERROR,
    OBTENER_DATA_EXITO
} from '../types';

// State inicial del reducer

const initialState = {
    busqueda: '',
    personajes: [],
    loading: false,
    error: null
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case OBTENER_DATA:
            return {
                ...state,
                loading: true
            }
        case OBTENER_DATA_EXITO:
            return {
                ...state,
                personajes: [...state.personajes, action.payload],
                loading: false
            }
        case OBTENER_DATA_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}

export default dataReducer;