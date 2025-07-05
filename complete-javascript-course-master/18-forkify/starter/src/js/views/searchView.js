class SearchView {
  _parentElement = document.querySelector('.search');
  getQuery() {
    const input = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return input;
  }
  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }
  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
