class ValidArray {
  constructor(validators) {
    this.validators = validators;
  }

  length(length) {
    return new ValidArray([...this.validators, (data) =>  data.length === length]);
  }

  isValid(data) {
    return this.validators.every((validator) => validator(data));
  }
}

export default ValidArray;
