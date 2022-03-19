import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '..';
import {mealData} from '../../data/mealData';
import {Meal} from '../../models/Meal';

interface MealsState {
  meals: Array<Meal>;
  filteredMeals: Array<Meal>;
  favoriteMeals: Array<Meal>;
}

const initialState: MealsState = {
  meals: mealData,
  filteredMeals: mealData,
  favoriteMeals: [],
};

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {},
});

export const {} = mealsSlice.actions;

export default mealsSlice.reducer;
