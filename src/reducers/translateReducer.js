import { TRANSLATE_TEXT } from '../actions/types';

const initialState = {
    inputText: "",
    outputText: ""
}
export default function (state = initialState, action) {
    switch (action.type) {
        case TRANSLATE_TEXT:
            return {
                ...initialState,
                outputText: action.payload
            }
        default:
            return state;
    }
}