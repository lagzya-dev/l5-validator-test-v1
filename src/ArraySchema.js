class ValidArray {
  constructor() {
    this.validators = [(data) => Array.isArray(data)];
  }

  length(length) {
    this.validators.push((data) => {
      if (data.length !== length) {
        return false;
      }
      return true;
    });
    return this;
  }

  isValid(data) {
    return this.validators.every((validator) => validator(data));
  }
}

export default ValidArray;
