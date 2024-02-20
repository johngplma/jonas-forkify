export default class View {
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkUp();
    this._clearHtml();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message) {
    this._clearHtml();
    this._parentEl.insertAdjacentHTML(
      'afterbegin',
      `<p class="error">${message}</p>`
    );
  }

  _clearHtml() {
    this._parentEl.innerHTML = '';
  }

  loadSpinner() {
    this._clearHtml();
    this._parentEl.insertAdjacentHTML(
      'afterbegin',
      `<p class="spinner">Loading...</p>`
    );
  }
}
