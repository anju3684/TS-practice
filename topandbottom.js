var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(species) {
        this._species = species;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this, 'Dog') || this;
    }
    return Dog;
}(Animal));
var dog = new Dog();
var animal = dog;
var obj = animal;
var str = "I am a string and an Object";
var thing = obj; //this the use of top type we can sepecify the object type is unknown
var stringOrNum = "I am a string or number!";
if (typeof stringOrNum === 'string') {
    console.log('I am a string');
}
else if (typeof stringOrNum === 'number') {
    console.log('I am a number');
}
else {
    var _exhaustiveCheck = stringOrNum; //this is bottom type:never
    throw new Error("Unknown type ".concat(_exhaustiveCheck));
}
function fail(msg) {
    throw new Error(msg);
}
