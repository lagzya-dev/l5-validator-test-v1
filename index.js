import Validator from './src/Validator.js';
const v = new Validator();
const m = v.number();
console.log(m.even().isValid(24));
console.log(m.odd().isValid(24));
export default Validator;
