"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//! Level 3 – Data Types (Practice Questions)
/* 1️⃣ Array of Objects (Very Common)
Create an array of user objects.
Each user should have:
- id (number)
- name (string)
- isActive (boolean)

Tasks:
- Create at least 3 users
- Log the array
*/
//?---------------------------------------------------
let users = [
    {
        id: 1,
        name: "Jagat Joshi",
        isActive: true
    },
    {
        id: 2,
        name: "Sita Joshi",
        isActive: true
    },
    {
        id: 1,
        name: "Ram Joshi",
        isActive: false
    }
];
// console.table(users);
// console.log(`User :${JSON.stringify(users)}`);
console.log(users);
//?===================================================
/* 2️⃣ Nested Object Types
Create a userProfile object with nested structure.

Structure:
- id: number
- name: string
- address:
  - city: string
  - country: string
  - pincode: number

Tasks:
- Create the object
- Log city and pincode
*/
//?---------------------------------------------------
let userProfile = {
    id: 5,
    name: "Jagat Joshi",
    address: {
        city: "Dhangadhi",
        country: "Nepal",
        pincode: 201233
    }
};
console.log(userProfile);
//  console.table(userProfile);
console.log(userProfile.address.city, userProfile.address.pincode);
//?===================================================
/* 3️⃣ Union + Object Combination
Create a product object.

Properties:
- id: number | string
- name: string
- price: number
- status: "available" | "outOfStock"

Tasks:
- Assign valid values
- Try assigning an invalid status (observe error)
*/
//?---------------------------------------------------
let product = {
    id: 5,
    // id:true, //Type 'boolean' is not assignable to type 'string | number'.
    name: "Laptop: Acer tuff gamming",
    price: 999,
    status: "available"
};
//?===================================================
/* 4️⃣ Enum with Object
Create an enum OrderStatus with:
- Pending
- Shipped
- Delivered

Create an order object with:
- orderId: number
- amount: number
- status: OrderStatus

Tasks:
- Assign Shipped status
- Log the order
*/
//?---------------------------------------------------
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "PENDING";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
})(OrderStatus || (OrderStatus = {}));
let order = {
    orderId: 101,
    amount: 999,
    status: OrderStatus.Shipped
};
console.log(order);
//?===================================================
/* 5️⃣ Tuple inside Object
Create a user object that includes location as a tuple.

Structure:
- name: string
- location: [number, number]  // latitude, longitude

Tasks:
- Assign correct tuple values
- Try changing order (observe error)
*/
//?---------------------------------------------------
let user = {
    name: "Dhangadhi",
    location: [54, 45]
    // location:["54",45]//Type 'string' is not assignable to type 'number'.
};
//?===================================================
/* 6️⃣ Readonly Data Modeling
Create a product object where:
- id is readonly
- name is string
- price is number

Tasks:
- Try modifying id (observe error)
*/
//?---------------------------------------------------
let product1 = {
    id: 101,
    name: "Jagat Joshi",
    price: 999
};
// product1.id=102;
// Error:Cannot assign to 'id' because it is a read-only property.
product1.name = "Charger"; //correct
console.log(product1); //{ id: 101, name: 'Charger', price: 999 }
//?===================================================
/* 7️⃣ Type Inference with Arrays & Objects
Let TypeScript infer types.

Tasks:
- Create an array of numbers without specifying type
- Push a number (works)
- Try pushing a string (error)

- Create an object without type annotation
- Try changing property type (error)
*/
//?---------------------------------------------------
let number = [1, 2, 3, 4];
number.push(100);
console.log(number); //[ 1, 2, 3, 4, 100 ]
// number.push("200");
//Error:- Argument of type 'string' is not assignable to parameter of type 'number'.
let person = {
    name: "jagat",
    age: 24
};
person.name = "Jagat Joshi";
console.log(person);
// person.age="TwentyFour";
// Type 'string' is not assignable to type 'number'.
//?===================================================
/* 8️⃣ Mini Challenge  (Real World)
Create a student record system.

Structure:
- students: array of objects
Each student has:
  - id: number
  - name: string
  - marks: number[]
  - result: "pass" | "fail"

Tasks:
- Create at least 2 students
- Log student names and results
*/
//?---------------------------------------------------
let students = [
    {
        id: 1,
        name: "Jagat Joshi",
        marks: [90, 85, 89, 97],
        result: "pass"
    },
    {
        id: 2,
        name: "Ram Joshi",
        marks: [80, 85, 89, 87],
        result: "pass"
    },
    {
        id: 3,
        name: "Sita Joshi",
        marks: [80, 85, 69, 87],
        result: "pass"
    }
];
// console.log(students);
students.forEach((student) => {
    console.log(student.name, "=>", student.result);
});
/*
Jagat Joshi => pass
Ram Joshi => pass
Sita Joshi => pass
*/
//?===================================================
//# sourceMappingURL=level3.js.map