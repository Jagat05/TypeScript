//! Level 2 – Data Types (Practice Questions)

/* 1️⃣ Union Types (Very Important)
Create variables that can store more than one type.
- Create a variable id that can be a number or string
- Assign both types one by one
- Try assigning a boolean (observe error)
*/


let id:number|string;
id=101;
id="OneHundredOne";
// id=true;
//Type 'boolean' is not assignable to type 'string | number'.
//?-------------------------------------------------------------------

/* 2️⃣ null & undefined with Union
Simulate missing data.
- Create a variable userScore that can be number or null
- Assign a number value
- Assign null
- Log both values
*/
let userScore:number|null;
userScore=25;
console.log(userScore);
userScore=null;
  console.log(userScore);
//?-------------------------------------------------------------------

/* 3️⃣ Array with Union Types
Create an array that can store different types.
- Create an array mixedData that can store number and string
- Push a number
- Push a string
- Try pushing a boolean (observe error)
*/
const arr:(number|string)[]=[];
arr.push(5);
arr.push("Jagat");
// arr.push(true);
//Error:-Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
//?-------------------------------------------------------------------

/* 4️⃣ Tuple (Fixed Structure)
Create a tuple where order matters.
- Create a tuple userInfo
- First value: string (username)
- Second value: number (age)
- Try changing the order (observe error)
*/
let userInfo:[string,number]=["Jagat",24];
// userInfo=[24,"Jagat"];
//Type 'string' is not assignable to type 'number'.
//?-------------------------------------------------------------------

/* 5️⃣ Enum (Intro Level)
Create an enum for status values.
- Create enum Status with values: Pending, Success, Failed
- Create a variable currentStatus
- Assign Success to it
- Log the value
*/

enum Status{
  Pending, 
  Success,
  Failed
}
let currentStatus:Status=Status.Success;
console.log(`Current Status : ${currentStatus}`);
//?-------------------------------------------------------------------

/* 6️⃣ Literal Types
Restrict a variable to specific values.
- Create a variable direction
- Allowed values: "left", "right", "up", "down"
- Assign one valid value
- Try assigning "forward" (observe error)
*/
let direction:"left"|"right"|"up"|"down";
direction="left";
// direction="east";
//Error:-Type '"east"' is not assignable to type '"left" | "right" | "up" | "down"'.
//?-------------------------------------------------------------------

/* 7️⃣ Type Inference (Deeper)
Let TypeScript infer the type.
- Create a variable count and assign a number
- Try assigning a string later
- Observe the error
*/
let count=20;
// count="Twenty";
//Error:-Type 'string' is not assignable to type 'number'.

//?-------------------------------------------------------------------
/* 8️⃣ Mini Challenge 
Create a user profile using only data types.
- id: number or string
- name: string
- isActive: boolean
- role: "admin" or "user"
- scores: number array
- lastLogin: Date or null
- Log the entire object
*/

let userProfile :{
   id: number | string;
name: string;
isActive: boolean;
role: "admin" | "user";
scores: number[];
lastLogin: Date | null;
}={
  id:5,
  name:"Jagat Joshi",
  isActive:true,
  role:"admin",
  scores:[90,80,85,95],
  lastLogin:new Date("2024-04-03")
};
console.log(userProfile);