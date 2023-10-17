class ValidArray {
    constructor() {
        this.validators = [(data) => Array.isArray(data)];
    }
    //length
    length(length) {
        this.validators.push((data) => {
            if (data.length !== length) {
                return false;
            }
            return true;
        });
        return this;
    }
    isValid(data) {
        for (const validator of this.validators) {
            if (!validator(data)) {
                return false;
            }
        }

        return true;
    }
}

export default ValidArray;