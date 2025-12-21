//!What is an Interface?

// An interface defines the structure (shape) of an object.
/*It tells TypeScript:
-what properties an object must have
-what their types are
---> Interface = rulebook for objects*/

//! 1️. Basic Interface
interface user {
  name:string;
  age:number;
  isActive:boolean;
}
let User:user={
  name:"Jagat",
  age:24,
  isActive:true
};
console.log(User);

/*Error if:
a property is missing
a property type is wrong
extra property is added
*/


//! 2️. Interface vs Inline Object Type
// Inline (not reusable)
let user: { name: string; age: number };

// Interface (reusable & clean)
interface User {
  name: string;
  age: number;
}

let user1:User={
name:"jagat",
age:24
}
console.log(user1);

//! 3️. Optional Properties in Interface
// Use ? if a property is not always required.
interface Student{
  name:string;
  age?:number;
}
let Student:Student={
  name:"Jagat Joshi"
}
// Student.name="Ram Joshi"
console.log(Student);

//! 4️. Readonly Properties
// Prevents modification after object creation.
//Use for IDs, tokens, constants.
interface products{
  readonly id:number;
  name:string;
}
const product:products={
  id:101,
  name:"Iphone"
};
// product.id=102;
// error:- Cannot assign to 'id' because it is a read-only property.

//! 5️. Interface with Methods (Functions)
//Interfaces can define function signatures.
interface Person{
  name:string;
  greet():void;
}
const person1:Person={
name:"Jagat Joshi",
greet(){
  console.log("Hello Jagat Bro!")
}
}
console.log(person1.greet());

//! 6️. Interface for Function Types
interface Add{
  (a:number,b:number):number;
}
const addNumbers: Add=(x,y)=>x+y;

//! 7️. Extending Interfaces (Very Important)
//Interfaces can inherit from other interfaces.
interface user1{
  id:number;
  name:string;
  age:number;
};
interface admin extends user1{
  isAdmin:boolean;
};

let admin1={
  id:101,
  name:"Jagat Joshi",
  isAdmin:true
};
console.log(admin1);

//! 8. Interface Merging (Interface-only Feature)
interface User {
  name: string;
}

interface User {
  age: number;
}

let user11: User = {
  name: "Jagat",
  age: 20
};
