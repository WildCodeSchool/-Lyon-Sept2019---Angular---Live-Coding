var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(color, model, wheels) {
        this.color = 'black';
        this.color = color;
        this.model = model;
        this.wheels = wheels;
    }
    Vehicle.prototype.display = function () {
        console.log("The color is " + this.color + " and the model is " + this.model);
    };
    return Vehicle;
}());
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(color, model) {
        return _super.call(this, color, model, 2) || this;
    }
    Moto.prototype.display = function () {
        console.log("This vehicle is a Moto");
    };
    return Moto;
}(Vehicle));
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(color, model) {
        return _super.call(this, color, model, 4) || this;
    }
    Car.prototype.display = function () {
        console.log("This vehicle is car");
    };
    return Car;
}(Vehicle));
var moto = new Moto("blue", "Honda");
var motoDeKeke = new Moto("white", "GSR");
/*console.log("Une moto à", moto.wheels, "roues");
moto.wheels = 3;
console.log("Une moto à", moto.wheels, "roues");
*/
var car = new Car("black", "C3");
var vehicle = new Vehicle("Pink", "Boing 747", 6); // For the number of wheels ask André and Hakim
vehicle.display();
moto.display();
car.display();
