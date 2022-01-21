import { LOADING, SUCCESS, ERROR } from './actions';

const initState = {
    info: {},
    results: [],
    loading: false,
    error: '', 
};

export const reducer = (state = initState, action) => {
    switch(action.type){
        case LOADING: 
            return {
                ...state,
                loading: true
            }
        case SUCCESS:
            return {
                ...state,
                loading: false,
                info: action.payload.info,
                results: action.payload.results
            }
        case ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};     


