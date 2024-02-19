import * as model from './model.js';
import recipeView from './views/recipeView.js';

const resultsContainer = document.querySelector('.results');
const recipeContainer = document.querySelector('.recipe-container');
const searchBtn = document.querySelector('.search-btn');
const searchQuery = document.querySelector('.search-query');

const showRecipe = async function () {
  try {
    // Get id
    const id = window.location.hash.slice(1);
    if (!id) return;

    // Show loading spinner while data is being fetched
    recipeView.loadSpinner();

    // Load recipe
    await model.loadRecipe(id);

    // Render recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    console.error(error);
  }
};

const searchRecipe = async function (query) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
    );
    const data = await res.json();

    // Recipe not found
    if (!res.ok) throw new Error(data.error);

    renderRecipes(data.data.recipes);

    console.log(data.data.recipes);
  } catch (error) {
    console.error(error);
  }
};

const renderRecipes = function (recipes) {
  resultsContainer.innerHTML = '';

  recipes.forEach(function (recipe) {
    const html = `
    <li class="result">
      <a href="#${recipe.id}">
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

searchBtn.addEventListener('click', () => {
  const query = searchQuery.value;
  query ? searchRecipe(query) : console.log('no valid search query');
  searchQuery.value = '';
});

searchQuery.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const query = searchQuery.value;
    query ? searchRecipe(query) : console.log('no valid search query');
    searchQuery.value = '';
  }
});

['hashchange', 'load'].forEach((ev) => window.addEventListener(ev, showRecipe));
