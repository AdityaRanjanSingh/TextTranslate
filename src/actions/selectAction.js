import { SELECT_ACTION } from './types';

export const inputText = (lang) => dispatch => {

    // fetch(`https://api.funtranslations.com/translate/${lang}.json?text=${inputText}`)
    //     .then(response => response.json())
    //     .then(data => {
    console.log(inputText)
    dispatch({
        type: SELECT_ACTION,
        payload: lang
    })
    // });

} 