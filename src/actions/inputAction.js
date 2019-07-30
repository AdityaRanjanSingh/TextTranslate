import { INPUT_ACTION } from './types';

export const inputText = (inputText) => dispatch => {

    // fetch(`https://api.funtranslations.com/translate/${lang}.json?text=${inputText}`)
    //     .then(response => response.json())
    //     .then(data => {
    console.log(inputText)
    dispatch({
        type: INPUT_ACTION,
        payload: inputText
    })
    // });

} 