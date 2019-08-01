import { SELECT_ACTION } from '../actions/types';

const initialState = {
    inputText: "",
    outputText: "",
    language: "yoda"
}
export default function (state = initialState, action) {
    switch (action.type) {
        case SELECT_ACTION:
            return {
                ...initialState,
                language: action.payload
            }
        default:
            return state;
    }
}