import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {mealData} from '../../data/mealData';
import {Meal} from '../../models/Meal';
import {Filter} from '../../screens/FiltersScreen';

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
    setFilters: (state, action: PayloadAction<Filter>) => {
      const appliedFilters = action.payload;

      state.filteredMeals = state.meals.filter(meal => {
        for (const key in appliedFilters) {
          if (appliedFilters[`${key}`] && !meal[`${key}`]) {
            return false;
          }
        }
        return true;
      });
    },
  },
});

export const {toggleFavorite, setFilters} = mealsSlice.actions;

export default mealsSlice.reducer;
