import { combineReducers } from 'redux';
import translateReducer from './translateReducer';
import inputReducer from './inputReducer'

export default combineReducers({
    translate: translateReducer,
    input: inputReducer
});