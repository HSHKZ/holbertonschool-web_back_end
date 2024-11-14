export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
    if (!Array.isArray(students)) {
      throw new TypeError('Student must be an array of strings');
    }
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(nom) {
    if (typeof nom !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = nom;
  }

  get length() {
    return this._length;
  }

  set length(long) {
    if (typeof long !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = long;
  }

  get students() {
    return this._students;
  }

  set students(eleves) {
    if (!Array.isArray(eleves)) {
      throw new TypeError('Student must be an array of strings');
    }
    this._students = eleves;
  }
}
