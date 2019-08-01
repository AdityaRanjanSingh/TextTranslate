import { combineReducers } from 'redux';
import translateReducer from './translateReducer';
import inputReducer from './inputReducer';
import selectReducer from './selectReducer'

export default combineReducers({
    translate: translateReducer,
    input: inputReducer,
    language: selectReducer
});