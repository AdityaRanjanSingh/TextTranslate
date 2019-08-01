import { TRANSLATE_TEXT } from './types';

export const translateText = (inputText, lang) => dispatch => {

    fetch(`https://api.funtranslations.com/translate/${lang}.json?text=${inputText}`)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: TRANSLATE_TEXT,
                payload: data.contents.translated
            })
        });

} 