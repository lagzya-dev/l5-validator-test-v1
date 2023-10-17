import NumberSchema from "./NumberSchema.js";
import ArraySchema from "./ArraySchema.js";
import ObjectSchema from "./ObjectSchema.js";
class Validator {
    //number
    number() {
        return new NumberSchema();
    }
    //array
    array() {
        return new ArraySchema();
    }
    // object
    object() {
        return new ObjectSchema();
    }
}
export default Validator;