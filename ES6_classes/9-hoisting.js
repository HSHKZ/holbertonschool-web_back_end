export class HolbertonClass {
  constructor(year, location) {
    if (typeof year !== 'number') {
      throw new TypeError('year must be a number');
    }
    this._year = year;
    if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }
    this._location = location;
  }

  get year() {
    return this._year;
  }

  set year(annee) {
    if (typeof annee !== 'number') {
      throw new TypeError('year must be a number');
    }
    this._year = annee;
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
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    if (typeof firstName !== 'string') {
      throw new TypeError('firstName must be a string');
    }
    this._firstName = firstName;
    if (typeof lastName !== 'string') {
      throw new TypeError('lastName must be a string');
    }
    this._lastName = lastName;
    if (!(holbertonClass instanceof HolbertonClass)) {
      throw new TypeError('holbertonClass must be a HolbertonClass');
    }
    this._holbertonClass = holbertonClass;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(prenom) {
    if (typeof prenom !== 'string') {
      throw new TypeError('firstName must be a string');
    }
    this._firstName = prenom;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(nom) {
    if (typeof nom !== 'string') {
      throw new TypeError('lastName must be a string');
    }
    this._lastName = nom;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  set holbertonClass(classe) {
    if (!(classe instanceof HolbertonClass)) {
      throw new TypeError('holbertonClass must be a HolbertonClass');
    }
    this._holbertonClass = classe;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export default [student1, student2, student3, student4, student5];
