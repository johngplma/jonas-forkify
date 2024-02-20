import View from './View.js';

class RecipeView extends View {
  _parentEl = document.querySelector('.recipe-container');

  _generateMarkUp() {
    return `
    <figure>
      <img
        src=${this._data.img}
        alt=""
      />
      <h1>${this._data.title}</h1>
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
        <span class="recipe-info-data">${this._data.time}</span>
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
        <span class="recipe-info-data">${this._data.serving}</span>
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
    ${this._data.ingredients
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
  }

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }
}

export default new RecipeView();
