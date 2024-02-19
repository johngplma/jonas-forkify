'use strict';

const resultsContainer = document.querySelector('.results');
const recipeContainer = document.querySelector('.recipe-container');
const searchBtn = document.querySelector('.search-btn');
const searchQuery = document.querySelector('.search-query');

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

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );

    const data = await res.json();

    // Recipe not found
    if (!res.ok) throw new Error(data.error);

    let { recipe } = data.data;
    recipe = {
      img: recipe.image_url,
      title: recipe.title,
      time: recipe.cooking_time,
      serving: recipe.servings,
      ingredients: recipe.ingredients,
    };

    console.log(recipe);

    const html = `<figure>
                    <img
                      src=${recipe.img}
                      alt=""
                    />
                    <h1>${recipe.title}</h1>
                  </figure>
                  <div class="recipe-details">
                    <div class="recipe-info">
                      <svg
                        class="icon-timer"
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-clock-hour-3"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M12 12h3.5" />
                        <path d="M12 7v5" />
                      </svg>
                      <span class="recipe-info-data">${recipe.time}</span>
                      <span class="recipe-info-text">minutes</span>
                    </div>
                    <div class="recipe-info">
                      <svg
                        class="icon-servings"
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-users"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                      </svg>
                      <span class="recipe-info-data">${recipe.serving}</span>
                      <span class="recipe-info-text">servings</span>
                      <div class="recipe-info-btn">
                        <button>
                          <svg
                            class="icon icon-minus"
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-circle-minus"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M9 12l6 0" />
                          </svg>
                        </button>
                        <button>
                          <svg
                            class="icon icon-plus"
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-circle-plus"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                            <path d="M9 12h6" />
                            <path d="M12 9v6" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <button class="bookmark-btn">
                      <svg
                        class="icon icon-bookmark"
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-bookmarks"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z"
                        />
                        <path d="M11 3h5a3 3 0 0 1 3 3v11" />
                      </svg>
                    </button>
                  </div>
                  <div class="ingredients-container">
                    <h2>Ingredients</h2>
                    <ul class="ingredients">
                  ${recipe.ingredients
                    .map(function (ing) {
                      return `<li class="ingredient">
                        <svg
                          class="icon icon-check"
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-check"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                        <span class="quantity">${ing.quantity || ''}</span>
                        <span class="unit">${ing?.unit || ''}</span>
                        <span class="description">${ing.description}
                        </span>
                      </li>`;
                    })
                    .join('')}


                    </ul>
                  </div>
                  <div class="directions">
                    <h2>How to cook it</h2>
                    <p>
                      This recipe was carefully designed and tested by Closet
                      Cooking. Please check out directions at their website.
                    </p>
                  </div>`;

    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin', html);
  } catch (error) {
    console.error(error);
  }
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
