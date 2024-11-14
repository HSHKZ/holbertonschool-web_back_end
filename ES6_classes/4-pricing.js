/* eslint-disable */
import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be same type as Currency');
    }
    this._currency = currency;
  }
  
  get amount() {
    return this._amount;
  }

  set amount(montant) {
    if (typeof montant !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = montant;
  }

  get currency() {
    return this._currency;
  }

  set currency(devise) {
    if (!(devise instanceof Currency)) {
      throw new TypeError('currency must be same type as Currency');
    }
    this._currency = devise;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`
  }

  static convertPrice(amount, conversionRate) {
    return (amount*conversionRate)
  }
}
