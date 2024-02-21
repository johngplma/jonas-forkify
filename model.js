export const state = {
  recipe: {},
  search: {
    results: [],
    page: 1,
    resultsPerPage: 10,
  },
};

export const loadRecipe = async function (id) {
  try {
    // Fetch data from api
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    // Save data, set recipe state
    const { recipe } = data.data;
    state.recipe = {
      img: recipe.image_url,
      title: recipe.title,
      time: recipe.cooking_time,
      serving: recipe.servings,
      ingredients: recipe.ingredients,
    };
  } catch (error) {
    throw error;
  }
};

export const loadSearchResults = async function (query) {
  try {
    // Fetch data from API
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
    );
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    state.search.results = data.data.recipes;
  } catch (error) {
    throw error;
  }
};

// Pagination
export const getResultsPerPage = function (page = 1) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  if (newServings < 1) return;
  // Update ingredients quantity
  state.recipe.ingredients.forEach((ing) => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.serving;
  });

  // Update servings in state
  state.recipe.serving = newServings;
};
