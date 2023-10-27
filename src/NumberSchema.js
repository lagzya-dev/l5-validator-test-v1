class NumberSchema {
  constructor(validators) {
    this.validators = validators;
  }

  // even
  even() {
    return new NumberSchema([...this.validators, (data) => data % 2 === 0]);
  }

  // odd
  odd() {
    return new NumberSchema([...this.validators, (data) => data % 2 !== 0]);
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }
}
export default NumberSchema;
