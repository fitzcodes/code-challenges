// Constructor
// Only called once - when instantiated
// 

class Car {
    constructor(name, color, type, isAutomatic, isFourWheel, cylinders) {
        this.name = name;
        this.color = color;
        this.type = type;
        this.isAutomatic = isAutomatic;
        this.isFourWheel = isFourWheel;
        this.cylinders = cylinders;
    }

    printDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Color: ${this.color}`);
        console.log(`Type: ${this.type}`);
        console.log (`Engine: ${this.isAutomatic ? "Automatic" : "Manual"}`);
        console.log (`Wheel Drive: ${this.isFourWheel ? "Four Wheel" : "Two Wheel"}`);
        console.log (`Engine: ${"V" + this.cylinders.toString()}`);
        console.log()
    }

    moveThenStop() {
        console.log('Moving Fast');
        this.stop();
    }

    stop() {
        console.log('...');
        console.log('Car Stopped!')
    }
}


// -------------------------------

const sportsCar = new Car('Sports Car', 'Blue', 'Coupe', false, false, 8);

const blueSuv = new Car('Big Car', 'Red', 'SUV', true, true, 6);

sportsCar.printDetails();
sportsCar.moveThenStop();


sportsCar  // Encapsulation


//---------------------
// Random Example of something more complicated

// class Bank {
//     constructor(...) {
//     this.allEmployees = [emp1, ]
// }

//     // Setter
//     setEmployeeCount(numEmployees) {
//         this.numEmployees = numEmployees;
//     }

//     addEmployee(employee) {
//         this.allEmployees.push(employee);
//         this.numEmployees++;
//     }

//     fireEmployee(employeeId) {
//         // search the array of employees
//         // remove that employee
//     }

//     // Getter
//     getEmployeeCount() {
//         return this.numEmployees;
//     }
// }