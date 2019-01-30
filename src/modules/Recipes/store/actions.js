// Actions for recipes
import * as actions from './actionTypes';

// import mock API calls
import Api from '../../../utils/request';

function loadRecipesSuccess(recipes) {
  return {
    type: actions.LOAD_RECIPES_SUCCESS,
    recipes
  };
}

function loadRecipeSuccess(recipe) {
  return {
    type: actions.LOAD_RECIPE_SUCCESS,
    recipe
  };
}

function refreshRecipe() {
  return {
    type: actions.REFRESH
  };
}

// Define thunks for API calls
export function loadRecipes() {
  return dispatch => {
    dispatch({ type: actions.LOAD });
    Api.getAllRecipes()
      .then(recipes => {
        dispatch(loadRecipesSuccess(recipes));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadRecipe(recipeId) {
  return dispatch => {
    dispatch({ type: actions.LOAD });
    Api.getRecipe(recipeId)
      .then(recipe => {
        dispatch(loadRecipeSuccess(recipe));
      })
      .catch(err => console.log(err));
  };
}

export function refresh() {
  return dispatch => dispatch(refreshRecipe());
}
