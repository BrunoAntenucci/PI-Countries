import axios from "axios";

export const GET_COUNTRIES = 'GET_COUNTRIES';

export function getCountries(){
    return function(dispatch){
        return axios
        .get('http://localhost:3001/api/countries/')  
        .then((response) => {
            dispatch({
                    type: GET_COUNTRIES,
                    payload: response.data
                })
        })  
    }
}
