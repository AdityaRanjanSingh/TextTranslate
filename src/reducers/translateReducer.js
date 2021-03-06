import { TRANSLATE_TEXT } from '../actions/types';

const initialState = {
    inputText: "",
    outputText: "",
    language: ""
}
export default function (state = initialState, action) {
    switch (action.type) {
        case TRANSLATE_TEXT:
            console.log("reducers", action.payload)
            return {
                ...initialState,
                outputText: action.payload
            }
        default:
            return state;
    }
}