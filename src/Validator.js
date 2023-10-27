import NumberSchema from './NumberSchema.js';
import ArraySchema from './ArraySchema.js';
import ObjectSchema from './ObjectSchema.js';

class Validator {
  number() {
    return new NumberSchema([(data) => typeof data === 'number']);
  }

  array() {
    return new ArraySchema([(data) => Array.isArray(data)]);
  }

  object() {
    return new ObjectSchema([(data) => typeof data === 'object']);
  }
}
export default Validator;
