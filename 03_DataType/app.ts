//! TypeScript Data Types
//!-->number
let age:number=25;
let price:number=99.99;
let temperature:number=-10;

// age="25"
//Error:-Type 'string' is not assignable to type 'number'.
//?---------------------------------------------------------

//!-->string
let name:string="Jagat";
let city:string='Dhangadhi'
let Intro:string=`My Name is ${name} and I am from ${city}`;

// name=10
// Error-->Type 'number' is not assignable to type 'string'.
//?---------------------------------------------------------

//!-->Boolean
let isLoggedIn: boolean = true;
let hasPermission: boolean = false;

// isLoggedIn = "true";
//Error
//?---------------------------------------------------------

//!-->any (Use Carefully)
//Allows any type -> This turns TypeScript into JavaScript.
let value:any=20;
value="Hello";
value=true;

//Why avoid? --> No error checking -->Defeats the purpose of TypeScript

//?---------------------------------------------------------
//!unknown (Safer than any)
//Like any, but safer.
let data:unknown;
data=10;
data="hello";

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
let y: null = null;
//Often used with union types:
let result: number | null = null;


//!undefined
//Variable declared but no value assigned.
let x: undefined;

//?---------------------------------------------------------
//!array
//number array
let marks: number[] = [80, 90, 85];
// String array
let names: string[] = ["A", "B", "C"];
//Generic style (also common)
let scores: Array<number> = [10, 20, 30];
// marks.push("90"); //Error

//?---------------------------------------------------------
//!tuple
//Fixed-length array with fixed types.
let user: [string, number] = ["Alex", 20];
// user = [20, "Alex"]; -->Error
//-->Use when:-Order and type both matter.

//?---------------------------------------------------------
//!object
let user1: {
  name: string;
  age: number;
} = {
  name: "Alex",
  age: 20
};

//!type (Type Alias)
//Used to reuse object structure-->Cleaner & reusable.
type User = {
  name: string;
  age: number;
};

let user2: User = {
  name: "Sam",
  age: 22
};

//?---------------------------------------------------------
//!enum
//Set of named constant values
enum Status {
  Pending,
  Success,
  Failed
}
let currentStatus: Status = Status.Success;

//?---------------------------------------------------------
//!void
//Set of named constant values
function logMessage(msg: string): void {
  console.log(msg);
}
logMessage("Hello User!")

//?---------------------------------------------------------
//!never
//Function that never ends.Used rarely, but important.
function throwError(): never {
  throw new Error("Error");
}


//?---------------------------------------------------------
//!Type Annotations
//Type annotations are how you explicitly tell TypeScript the data type.
//!All the Examples given above comes under type Annotations .
 let age1: number = 25;   // type annotation

//!Type Inference (Important)
// Type inference is TypeScript automatically deciding the type when you don’t annotate. TypeScript automatically detects types.

let count = 5; // number
// count = "five"; //Error

//?---------------------------------------------------------

