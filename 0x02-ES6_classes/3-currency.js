/* eslint-disable */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  validateType(value, type) {
    if (typeof value !== 'string') {
      throw new TypeError(`${type} must be a string`);
    }
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this.validateType(code, 'Code');
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this.validateType(name, 'Name');
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
