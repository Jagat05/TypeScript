"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//! 1.Function with Type Annotations
function add(a, b) {
    return a + b;
}
console.log(`Sum : ${add(2, 3)}`);
// console.log(`Sum : ${add(2,"3")}`);
// Error :- Argument of type 'string' is not assignable to parameter of type 'number'.
//?---------------------------------------------------------
//! 2. Function with No Return (void)
function greet() {
    console.log("hello world");
}
greet();
//void = function returns nothing
//?---------------------------------------------------------
//! 3. Optional Parameters
// Use ? to make a parameter optional.
function printName(fname, lname) {
    console.log(fname, lname);
}
console.log("jagat", "joshi");
console.log("jagat");
//both are valid
//?---------------------------------------------------------
//! 4. Default Parameters
// We can assign value in parameter as well
function multiply(a, b = 2) {
    return a * b;
}
console.log(`Multiplication ${multiply(2)}`); //4
console.log(`Multiplication ${multiply(2, 5)}`); //We can again pass another value... //10
//?---------------------------------------------------------
//! 5. Arrow Functions
const subtract = (a, b) => {
    return a - b;
};
console.log(subtract(2, 3));
//?---------------------------------------------------------
//# sourceMappingURL=app.js.map