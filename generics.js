function identity(arg) {
    return arg;
}
var Collection = /** @class */ (function () {
    function Collection() {
        this._things = [];
    }
    Collection.prototype.add = function (something) {
        this._things.push(something);
    };
    Collection.prototype.get = function (index) {
        return this._things[index];
    };
    return Collection;
}());
var Stringss = new Collection();
//Stringss.add(101);//this will give error bcs of number data type
//Stringss.add("world");
Stringss.add(1011);
console.log(Stringss.get(0));
