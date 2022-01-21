import axios from "axios";

export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const SUCCESS = "SUCCESS";

export const getCharacters = (newUser) => (dispatch) => {
    dispatch({ type: LOADING })
    axios.get('https://rickandmortyapi.com/api/character')
        .then(resp => {
            console.log(resp);
            dispatch(success(resp.data))
        })
        .catch(err => {
            // if you put err in the console.log({ err }) in an object, like that, it will show the whole error
            console.error({ err });
            dispatch(error(err.response.data.error))
        });
};

const success = (data) => {
    return { type: SUCCESS, payload: data }
}

const error = (message) => {
    return { type: ERROR, payload: message }
}






// THIS IS WHAT LINE 5 IS DOING--
// function getCharacter(){
//     return function(){
//         do stuff
//     }
// }