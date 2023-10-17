/*## 5 задача

Вам необходимо создать валидатор полей объекта, используя методы, представленные в предыдущих задачах. Для этого необходимо создать метод `object()`, который проверяет не сам объект, а данные внутри него на соответствием заданным валидаторам. Метод `Validator.object()` должен содержать метод `shape()`, позволяющий задать поля, подлежащие валидации, для объекта. Метод `shape()` принимает объект, в котором ключи представляют поля, которые требуется проверить, а значения - экземпляры валидаторов. Если количество полей в shape не совпадает с количеством полей в валидируемом объекте, то валидация не проходит.

**Методы**

- метод валидатора (экземпляр класса *Validator*) `object()`, который проверяет данные внутри объекта (поля объекта)
- метод `shape()`, который вызывается у экземпляра `object()`. Он позволяет задать поля валидации для объекта

```javascript*/

class ObjectSchema {
    shape(obj) {
        this.obj = obj;
        return this;
    }
    isValid(obj) {
        const keys = Object.keys(obj);
        const keysSchema = Object.keys(this.obj);
        if (keys.length !== keysSchema.length) {
            return false;
        }
        for (const key of keys) {
            if (!this.obj[key].isValid(obj[key])) {
                return false;
            }
        }
        return true;
    }
}
export default ObjectSchema;