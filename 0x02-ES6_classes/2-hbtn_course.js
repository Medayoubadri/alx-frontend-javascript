/* eslint-disable */
export default class ALXCourse {
  constructor(name, length, students) {
    this.validateType(name, 'string', 'name must be a string');
    this.validateType(length, 'number', 'length must be a number');
    this.validateStudents(students);
    this._name = name;
    this._length = length;
    this._students = students;
  }

  validateType(value, type, errorMsg) {
    if (typeof value !== type) {
      throw new TypeError(errorMsg);
    }
  }

  validateStudents(students) {
    if (
      !Array.isArray(students) ||
      !students.every((student) => typeof student === 'string')
    ) {
      throw new TypeError('students must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this.validateType(name, 'string', 'name must be a string');
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this.validateType(length, 'number', 'length must be a number');
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this.validateStudents(students);
    this._students = students;
  }
}
