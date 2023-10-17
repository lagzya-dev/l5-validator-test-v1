
class ObjectSchema {
    constructor(){
        this.validators = [(data) => typeof data === "object"];
    }
    shape(obj) {
        this.validators.push((data) => {
            const keys = Object.keys(data);
            const keysSchema = Object.keys(obj);
            if (keys.length !== keysSchema.length) {
                return false;
            }
            for (const key of keys) {
                if (!obj[key].isValid(data[key])) {
                    return false;
                }
            }
            return true;
        });
        return this;
    }
    isValid(obj) {
        for (const validator of this.validators) {
            if (!validator(obj)) {
                return false;
            }
        }

        return true;
    }
}
export default ObjectSchema;