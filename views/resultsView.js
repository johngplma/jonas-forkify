class ResultView {
  #parentEl = document.querySelector('.results');
  #data;

  // Render results
  render(data) {
    this.#data = data;
    // const markup = this.#markUp();

    const markup = this.#data
      .map((recipe) => {
        return this.#markUp(recipe);
      })
      .join('');

    this.#clearHtml();
    this.#parentEl.insertAdjacentHTML('beforeend', markup);
  }

  renderError(message) {
    this.#clearHtml();
    this.#parentEl.insertAdjacentHTML(
      'afterbegin',
      `<p class="error">${message}</p>`
    );
  }

  loadSpinner() {
    this.#clearHtml();
    this.#parentEl.insertAdjacentHTML(
      'afterbegin',
      `<p class="spinner">Loading...</p>`
    );
  }

  #markUp(recipe) {
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
  }

  #clearHtml() {
    this.#parentEl.innerHTML = '';
  }
}

export default new ResultView();
