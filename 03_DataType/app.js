"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//! TypeScript Data Types
//!-->number
let age = 25;
let price = 99.99;
let temperature = -10;
// age="25"
//Error:-Type 'string' is not assignable to type 'number'.
//?---------------------------------------------------------
//!-->string
let name = "Jagat";
let city = 'Dhangadhi';
let Intro = `My Name is ${name} and I am from ${city}`;
// name=10
// Error-->Type 'number' is not assignable to type 'string'.
//?---------------------------------------------------------
//!-->Boolean
let isLoggedIn = true;
let hasPermission = false;
// isLoggedIn = "true";
//Error
//?---------------------------------------------------------
//!-->any (Use Carefully)
//Allows any type -> This turns TypeScript into JavaScript.
let value = 20;
value = "Hello";
value = true;
//Why avoid? --> No error checking -->Defeats the purpose of TypeScript
//?---------------------------------------------------------
//!unknown (Safer than any)
//Like any, but safer.
let data;
data = 10;
data = "hello";
// console.log(data.toUpperCase());
// Error-->Not allowed directly
if (typeof data === "string") {
    console.log(data.toUpperCase());
}
//Must check type first:
//?---------------------------------------------------------
//!null and undefined
//!null
//Intentional empty value
let y = null;
//Often used with union types:
let result = null;
//!undefined
//Variable declared but no value assigned.
let x;
//?---------------------------------------------------------
//!array
//number array
let marks = [80, 90, 85];
// String array
let names = ["A", "B", "C"];
//Generic style (also common)
let scores = [10, 20, 30];
// marks.push("90"); //Error
//?---------------------------------------------------------
//!tuple
//Fixed-length array with fixed types.
let user = ["Alex", 20];
// user = [20, "Alex"]; -->Error
//-->Use when:-Order and type both matter.
//?---------------------------------------------------------
//!object
let user1 = {
    name: "Alex",
    age: 20
};
let user2 = {
    name: "Sam",
    age: 22
};
//?---------------------------------------------------------
//!enum
//Set of named constant values
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Failed"] = 2] = "Failed";
})(Status || (Status = {}));
let currentStatus = Status.Success;
//?---------------------------------------------------------
//!void
//Set of named constant values
function logMessage(msg) {
    console.log(msg);
}
logMessage("Hello User!");
//?---------------------------------------------------------
//!never
//Function that never ends.Used rarely, but important.
function throwError() {
    throw new Error("Error");
}
//?---------------------------------------------------------
//!Type Inference (Important)
// TypeScript automatically detects types.
let count = 5; // number
// count = "five"; //Error
//?---------------------------------------------------------
//# sourceMappingURL=app.js.map