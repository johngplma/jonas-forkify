import View from './View.js';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-pagination');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkUp() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1 with other pages
    if (this._data.page === 1 && numPages > 1) {
      this._parentEl.style.justifyContent = 'end';
      return `
      <button class="next-page btn-pagination" data-goto=${this._data.page + 1}>
        Page ${this._data.page + 1}
      </button>`;
    }

    // Last page
    if (numPages === this._data.page && numPages > 1) {
      this._parentEl.style.justifyContent = 'start';
      return `
      <button class="prev-page btn-pagination" data-goto=${this._data.page - 1}>
        Page ${this._data.page - 1}
      </button>`;
    }

    // In between
    if (numPages > 1 && this._data.page < numPages && this._data.page > 1) {
      this._parentEl.style.justifyContent = 'space-between';
      return `
      <button class="prev-page btn-pagination" data-goto=${this._data.page - 1}>
        Page ${this._data.page - 1}
      </button>
      <button class="next-page btn-pagination" data-goto=${this._data.page + 1}>
        Page ${this._data.page + 1}
      </button>`;
    }

    return '';
  }
}

export default new PaginationView();
