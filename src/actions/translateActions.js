import { TRANSLATE_TEXT } from './types';

export const translateText = () => dispatch => {
    dispatch({
        type: TRANSLATE_TEXT,
        payload: ""
    })
} 