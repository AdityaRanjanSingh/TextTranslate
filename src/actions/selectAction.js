import { SELECT_ACTION } from './types';

export const selectionChange = (lang) => dispatch => {

    // fetch(`https://api.funtranslations.com/translate/${lang}.json?text=${inputText}`)
    //     .then(response => response.json())
    //     .then(data => {
    dispatch({
        type: SELECT_ACTION,
        payload: lang
    })
    // });

} 