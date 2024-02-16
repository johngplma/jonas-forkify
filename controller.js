'use strict';

const getRecipe = async function (query) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
    );
    const data = await res.json();

    // Recipe not found
    if (!res.ok) throw new Error(data.error);

    renderRecipes(data.data.recipes);
  } catch (error) {
    console.error(error);
  }
};

getRecipe('pizza');

const renderRecipes = async function (recipes) {
  console.log(recipes);
};
