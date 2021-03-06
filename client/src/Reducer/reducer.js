import { GET_COUNTRIES } from '../Actions/CountriesActions.js'

const initialState = {
    countries: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;