import { myInterface } from './myInterface.js';
 
class Foo {
    constructor(value) {
        this.value = value;
    }
 
    _inc () {
        this.value = this.value + 1;
    }
 
    _getValue () {
        return this.value;
    }
 
    get [myInterface]() {
        return {
            inc: this._inc,
            get value() {
                return this._getValue();
            }
        };
    }
}
 
export { Foo };