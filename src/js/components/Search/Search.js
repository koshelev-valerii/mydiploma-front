import BaseComponent from '../BaseComponent';
import errors from '../../constants/errors';

const { MISSING_SEARCH_VALUE_ERROR, TYPE_SEARCH_VALUE } = errors;

export default class Search extends BaseComponent {
  constructor(element) {
    super();
    this._element = element;
    this._input = this._element.querySelector('.field__input');
    this._button = this._element.querySelector('.field__button');
    this.setListeners([
      {
        event: 'input',
        element: 'element',
        callback: this._validateHandler,
      },
    ]);
  }

  get input() {
    return this._input.value;
  }

  toggleLockForm() {
    const elements = Array.from(this._element.elements);

    elements.forEach((elem) => {
      elem.toggleAttribute('disabled');
      if (elem.name === 'submit') {
        this._element.elements.submit.classList.toggle('field__button_active');
      }
    });
  }

  _validateHandler(e) {
    if (e.target.validity.valueMissing) {
      this._input.placeholder = MISSING_SEARCH_VALUE_ERROR;
    } else {
      this._input.placeholder = TYPE_SEARCH_VALUE;
    }

    if (this._element.checkValidity()) {
      this._button.removeAttribute('disabled');
      this._button.classList.add('field__button_active');
    } else {
      this._button.setAttribute('disabled', true);
      this._button.classList.remove('field__button_active');
    }
  }
}
