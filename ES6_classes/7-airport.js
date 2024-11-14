export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
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

  get code() {
    return this._code;
  }

  set code(cod) {
    if (typeof cod !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = cod;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
