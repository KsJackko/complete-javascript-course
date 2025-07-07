import View from './view';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      if (goToPage > 0) handler(goToPage);
    });
  }
  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    //Page 1 with other pages
    if (this._data.currentPage === 1 && numPages > 0)
      return `
          <button data-goto = "${
            this._data.currentPage + 1
          }" class="btn--inline pagination__btn--next">
            <span>Page ${this._data.currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    //Page 1 with no other pages
    if (this._data.currentPage === 1 && numPages === 0) return '';
    //Last page
    if (this._data.currentPage === numPages)
      return `
          <button data-goto = "${
            this._data.currentPage - 1
          }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.currentPage - 1}</span>
          </button>
    `;
    //Other pages
    if (this._data.currentPage != 1 && this._data.currentPage != numPages)
      return `
          <button data-goto = "${
            this._data.currentPage - 1
          }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.currentPage - 1}</span>
          </button>
          <button data-goto = "${
            this._data.currentPage + 1
          }" class="btn--inline pagination__btn--next">
            <span>Page ${this._data.currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
    `;
  }
}

export default new PaginationView();
