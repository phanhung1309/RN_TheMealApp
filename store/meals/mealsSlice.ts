import {createSlice, PayloadAction} from '@reduxjs/toolkit';
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
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.payload,
      );

      if (existingIndex >= 0) {
        state.favoriteMeals.splice(existingIndex, 1);
      } else {
        const meal = state.meals.find(meal => meal.id === action.payload);

        state.favoriteMeals.push(meal);
      }
    },
  },
});

export const {toggleFavorite} = mealsSlice.actions;

export default mealsSlice.reducer;
