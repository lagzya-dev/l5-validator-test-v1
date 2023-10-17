/*
**Параметры и методы**

- аргумент, который мы валидируем (проверяем)
- метод валидатора `number()`, который создает экземпляр валидатора чисел
- метод экземпляра `isValid()`, который вызывается у экземпляра `number()`, он принимает данные на вход и валидирует
*/
class NumberSchema {
    constructor() {
        this.odd1 = false;
        this.even1 = false;
    }
    //even
    even() {
        this.even1 = true;
        return this
    }
    //odd
    odd() {
        this.odd1 = true;
        return this;
    }

    isValid(value) {
        if (typeof value !== "number") {
            return false;
        }
        if (this.odd1 && value % 2 === 0) {
            return false;
        }
        if (this.even1 && value % 2 !== 0) {
            return false;
        }

        return true;
    }
}
export default NumberSchema;