export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    this._size = size;
    if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(taille) {
    if (typeof taille !== 'number') {
      throw new TypeError('size must be a number');
    }
    this._size = taille;
  }

  get location() {
    return this._location;
  }

  set location(lieu) {
    if (typeof lieu !== 'string') {
      throw new TypeError('location must be a string');
    }
    this._location = lieu;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
