import {combineReducers} from '@reduxjs/toolkit';
import mealsReducer from './meals/mealsSlice';

const rootReducer = combineReducers({
  meals: mealsReducer,
});

export default rootReducer;
