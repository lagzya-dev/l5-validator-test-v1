/*
**Параметры и методы**

- аргумент, который мы валидируем (проверяем)
- метод валидатора `number()`, который создает экземпляр валидатора чисел
- метод экземпляра `isValid()`, который вызывается у экземпляра `number()`, он принимает данные на вход и валидирует
*/
class NumberSchema {
    constructor() {
        this.validators = [(data) => typeof data === "number"];
    }
    //even
    even() {
        this.validators.push((data) => data % 2 === 0);
        return this
    }
    //odd
    odd() {
        this.validators.push((data) => data % 2 !== 0);
        return this;
    }

    isValid(value) {
        for (const validator of this.validators) {
            if (!validator(value)) {
                return false;
            }
        }
        return true;
    }
}
export default NumberSchema;