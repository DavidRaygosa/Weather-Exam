import { combineReducers } from 'redux';
import continent from './continentReducer';
import planetReducer from './planetReducer';
import menuReducer from './menuReducer';
import weatherReducer from './weatherReducer';
import statsReducer from './statsReducer';
import regionReducer from './regionReducer';

export default combineReducers({
    planetReducer,
    menuReducer,
    continent,
    weatherReducer,
    regionReducer,
    statsReducer
});