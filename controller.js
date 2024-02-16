'use strict';

const recipeEl = document.querySelector('.recipes');

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

const renderRecipes = function (recipes) {
  recipes.map(function (recipe) {
    const html = `
    <li class="recipe">
      <a href="">
        <img src="${recipe.image_url}" alt="" />
        <div class="info">
          <h4 class="title">${recipe.title}</h4>
          <p class="publisher">${recipe.publisher}</p>
        </div>
      </a>
    </li>`;

    recipeEl.insertAdjacentHTML('beforeend', html);
  });
};
