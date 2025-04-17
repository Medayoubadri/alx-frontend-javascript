/* eslint-disable no-underscore-dangle */
import ALXClass from './ALXClass';

export default class StudentALX {
  constructor(firstName, lastName, alxClass) {
    if (!(alxClass instanceof ALXClass)) {
      throw new TypeError('alxClass must be an instance of ALXClass');
    }
    if (typeof firstName !== 'string') {
      throw new TypeError('First name must be a string');
    }

    if (typeof lastName !== 'string') {
      throw new TypeError('Last name must be a string');
    }
    this._firstName = firstName;
    this._lastName = lastName;
    this._alxClass = alxClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get alxClass() {
    return this._alxClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - `
      + `${this._alxClass.year} - `
      + `${this._alxClass.location}`;
  }
}
