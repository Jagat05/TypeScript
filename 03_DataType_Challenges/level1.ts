//!Number Type

/*Create variables for the following using number type:
Your age
Product price
Temperature value
-> Try changing one value to a string and observe the error.
*/
let age:number=24;
let productPrice:number=12000;
let temperature:number=45;

//  temperature="45";
 //Error:-Type 'string' is not assignable to type 'number'.

//!String Type
 /*Create string variables for:
Your name
Your city
A sentence using template literals*/
let Name:string="jagat";
let City:string='Dhangadhi';
// City=24;  //Error:-Type 'number' is not assignable to type 'string'.
let greet:string=`Hello !, ${Name} from ${City}`
console.log(greet);

//!String Type
/*Create boolean variables for:
isLoggedIn
hasPermission
*/

let isLoggedIn:boolean;
let hasPermission:boolean;
isLoggedIn=true;
hasPermission=false;
console.log(isLoggedIn,hasPermission);

//!Any Type
/*Create a variable that can hold any type of value.
Assign different types of values to it (number, string, boolean) and log the variable each time.
*/
let data:any;
data=25;
console.log(data);
//Output:-25
data=true;
console.log(data);
//Output:-true      
data="Jagat"
console.log(data);
//Output:-Jagat

//!Unknown Type
/*Create a variable with unknown type.
Assign different types of values to it.
Before performing any operations, check its type and log appropriate messages.
*/
let unknownData:unknown;
unknownData=45;
if(typeof unknownData==="number"){
  console.log("The number is:",unknownData);
}
unknownData="Hello World";
if(typeof unknownData==="string"){
  console.log("The string is:",unknownData);
}
