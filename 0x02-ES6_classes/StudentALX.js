/* eslint-disable no-underscore-dangle */

export default class StudentALX {
  constructor(firstName, lastName, alxClass) {
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
