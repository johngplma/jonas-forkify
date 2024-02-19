export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    // Fetch data from api
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);

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
    console.error(error);
  }
};
