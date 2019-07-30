import { SELECT_ACTION } from '../actions/types';

const initialState = {
    inputText: "",
    outputText: "",
    language: ""
}
export default function (state = initialState, action) {
    switch (action.type) {
        case INPUT_ACTION:
            return {
                ...initialState,
                language: action.payload
            }
        default:
            return state;
    }
}