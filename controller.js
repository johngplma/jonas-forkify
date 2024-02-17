'use strict';

const resultsContainer = document.querySelector('.results');

const getRecipes = async function (query) {
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

getRecipes('pizza');

const renderRecipes = function (recipes) {
  recipes.forEach(function (recipe) {
    const html = `
    <li class="result">
      <a href="">
        <figure>
          <img src="${recipe.image_url}" alt="" />
        </figure>
        <div class="info">
          <h4 class="title">${recipe.title}</h4>
          <p class="publisher">${recipe.publisher}</p>
        </div>
      </a>
    </li>`;

    resultsContainer.insertAdjacentHTML('beforeend', html);
  });
};
