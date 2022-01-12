//implementing the interface
var _imagedim = {
    width: "200px",
    height: "300px"
};
var Shapes = /** @class */ (function () {
    function Shapes(width, height) {
        this.width = width;
        this.height = height;
    }
    Shapes.prototype.getWidth = function () {
        return this.width;
    };
    return Shapes;
}());
