/* eslint-disable no-underscore-dangle */

export default class ALXClass {
  constructor(year, location) {
    if (typeof year !== 'number') {
      throw new TypeError('Year must be a number');
    }

    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}
