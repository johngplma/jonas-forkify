import View from './View.js';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');

  _generateMarkUp() {
    return this._data
      .map((recipe) => {
        return `
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
      })
      .join('');
  }
}

export default new ResultsView();
