class ObjectSchema {
  constructor(validators) {
    this.validators = validators;
  }

  shape(obj) {
    return new ObjectSchema([...this.validators, (data) => {
      const keys = Object.keys(data);
      const keysSchema = Object.keys(obj);
      if (keys.length !== keysSchema.length) {
        return false;
      }
      return keys.every((key) => obj[key].isValid(data[key]));
    }]);
  }

  isValid(obj) {
    return this.validators.every((validator) => validator(obj));
  }
}
export default ObjectSchema;
