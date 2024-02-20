class SearchView {
  _parentEl = document.querySelector('.search-field');

  getQuery() {
    const query = this._parentEl.querySelector('.search-query').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector('.search-query').value = '';
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', (e) => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
