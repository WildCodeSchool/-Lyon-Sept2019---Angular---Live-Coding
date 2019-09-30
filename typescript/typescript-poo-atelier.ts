class Vehicle {
    color: string = 'black';
    model: string;
    // Private attribute which won't be accessible outside of the class
    private wheels: number;
    
    constructor(color: string, model: string, wheels: number){
        this.color = color;
        this.model = model;
        this.wheels = wheels;
    }

    display(){
        console.log(`The color is ${this.color} and the model is ${this.model}`)
    }
}

class Moto extends Vehicle {

    constructor(color:string, model: string){
        super(color, model, 2);
    }

    display(){
        console.log(`This vehicle is a Moto`);
    }
}

class Car extends Vehicle {

    constructor(color:string, model: string){
        super(color, model, 4);
    }

    display(){
        console.log(`This vehicle is car`);
    }
}

let moto = new Moto("blue", "Honda");
let motoDeKeke = new Moto("white", "GSR");

/*console.log("Une moto à", moto.wheels, "roues");
moto.wheels = 3;
console.log("Une moto à", moto.wheels, "roues");
*/

let car = new Car("black", "C3");
let vehicle = new Vehicle("Pink", "Boing 747", 6); // For the number of wheels ask André and Hakim

vehicle.display();
moto.display();
car.display();
