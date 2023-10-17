class NumberSchema {
  constructor() {
    this.validators = [(data) => typeof data === 'number'];
  }

  // even
  even() {
    this.validators.push((data) => data % 2 === 0);
    return this;
  }

  // odd
  odd() {
    this.validators.push((data) => data % 2 !== 0);
    return this;
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }
}
export default NumberSchema;
