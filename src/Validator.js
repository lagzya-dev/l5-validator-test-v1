import NumberSchema from './NumberSchema.js';
import ArraySchema from './ArraySchema.js';
import ObjectSchema from './ObjectSchema.js';

class Validator {
  number() {
    return new NumberSchema(this);
  }

  array() {
    return new ArraySchema(this);
  }

  object() {
    return new ObjectSchema(this);
  }
}
export default Validator;
