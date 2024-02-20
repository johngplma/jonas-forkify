import * as model from './model.js';
import recipeView from './views/recipeView.js';
import resultsView from './views/resultsView.js';

const searchBtn = document.querySelector('.search-btn');
const searchQuery = document.querySelector('.search-query');

const recipeController = async function () {
  try {
    // Get id
    const id = window.location.hash.slice(1);
    if (!id) return;

    // Show loading spinner while api is loading
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
    const query = 'milk';

    // Show loading spinner while api is loading
    resultsView.loadSpinner();

    // Load search results from API
    await model.loadSearchResults(query);
    // console.log(model.state.searchResults);

    // Render results
    resultsView.render(model.state.searchResults);
  } catch (error) {
    console.error(error);
  }
};

recipeView.addHandlerRender(recipeController);
resultsController();

// const renderRecipes = function (recipes) {
//   resultsContainer.innerHTML = '';

//   recipes.forEach(function (recipe) {
//     const html = `
//     <li class="result">
//       <a href="#${recipe.id}">
//         <figure>
//           <img src="${recipe.image_url}" alt="" />
//         </figure>
//         <div class="info">
//           <h4 class="title">${recipe.title}</h4>
//           <p class="publisher">${recipe.publisher}</p>
//         </div>
//       </a>
//     </li>`;

//     resultsContainer.insertAdjacentHTML('beforeend', html);
//   });
// };

// searchBtn.addEventListener('click', () => {
//   const query = searchQuery.value;
//   query ? searchRecipe(query) : console.log('no valid search query');
//   searchQuery.value = '';
// });

// searchQuery.addEventListener('keydown', (e) => {
//   if (e.key === 'Enter') {
//     const query = searchQuery.value;
//     query ? searchRecipe(query) : console.log('no valid search query');
//     searchQuery.value = '';
//   }
// });
