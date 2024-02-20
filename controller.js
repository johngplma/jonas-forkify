import * as model from './model.js';
import recipeView from './views/recipeView.js';
import resultsView from './views/resultsView.js';
import searchView from './views/searchView.js';

const recipeController = async function () {
  try {
    // Get id
    const id = window.location.hash.slice(1);
    if (!id) return;

    // Show loading spinner while API is loading
    recipeView.loadSpinner();

    // Load recipe
    await model.loadRecipe(id);

    // Render recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError(error);
  }
};

const resultsController = async function () {
  try {
    // Get search query from user input
    const query = searchView.getQuery();
    if (!query) return;

    // Show loading spinner while API is loading
    resultsView.loadSpinner();

    // Load search results from API
    await model.loadSearchResults(query);

    // Render results
    resultsView.render(model.state.searchResults);
  } catch (error) {
    resultsView.renderError(error);
  }
};

// Event listeners from views
recipeView.addHandlerRender(recipeController);
searchView.addHandlerSearch(resultsController);
