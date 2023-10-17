class ValidArray {
    constructor(schema) {
        this.schema = schema;
    }
    //length
    length(length) {
        this.lengths = length;
        return this;
    }
    isValid(data) {
        if (!Array.isArray(data)) {
            return false;
        }
    
        if(this.lengths != undefined){
            if(data.length != this.lengths){
                return false;
            }
        }
        return true;
    }
}

export default ValidArray;