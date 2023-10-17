class ObjectSchema {
  constructor() {
    this.validators = [(data) => typeof data === 'object'];
  }

  shape(obj) {
    this.validators.push((data) => {
      const keys = Object.keys(data);
      const keysSchema = Object.keys(obj);
      if (keys.length !== keysSchema.length) {
        return false;
      }
      return keys.every((key) => obj[key].isValid(data[key]));
    });
    return this;
  }

  isValid(obj) {
    return this.validators.every((validator) => validator(obj));
  }
}
export default ObjectSchema;
