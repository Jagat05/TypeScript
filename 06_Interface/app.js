"use strict";
//!What is an Interface?
Object.defineProperty(exports, "__esModule", { value: true });
let User = {
    name: "Jagat",
    age: 24,
    isActive: true
};
console.log(User);
/*Error if:
a property is missing
a property type is wrong
extra property is added
*/
//! 2️. Interface vs Inline Object Type
// Inline (not reusable)
let user;
let user1 = {
    name: "jagat",
    age: 24
};
console.log(user1);
let Student = {
    name: "Jagat Joshi"
};
// Student.name="Ram Joshi"
console.log(Student);
const product = {
    id: 101,
    name: "Iphone"
};
const person1 = {
    name: "Jagat Joshi",
    greet() {
        console.log("Hello Jagat Bro!");
    }
};
console.log(person1.greet());
const addNumbers = (x, y) => x + y;
;
;
let admin1 = {
    id: 101,
    name: "Jagat Joshi",
    isAdmin: true
};
console.log(admin1);
let user11 = {
    name: "Jagat",
    age: 20
};
//# sourceMappingURL=app.js.map