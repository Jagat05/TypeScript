//! 1.Function with Type Annotations
function add(a:number,b:number):number{
return a+b;
}
console.log(`Sum : ${add(2,3)}`);
// console.log(`Sum : ${add(2,"3")}`);
// Error :- Argument of type 'string' is not assignable to parameter of type 'number'.
//?---------------------------------------------------------


//! 2. Function with No Return (void)
function greet():void{
console.log("hello world");
}
greet();
//void = function returns nothing
//?---------------------------------------------------------

//! 3. Optional Parameters
// Use ? to make a parameter optional.
function printName(fname:string,lname?:string):void{
  console.log(fname,lname);
}
console.log("jagat","joshi")
console.log("jagat")
//both are valid
//?---------------------------------------------------------

//! 4. Default Parameters
// We can assign value in parameter as well
function multiply(a:number,b:number=2):number{
return a*b;
}
console.log(`Multiplication ${multiply(2)}`) //4
console.log(`Multiplication ${multiply(2,5)}`)//We can again pass another value... //10
//?---------------------------------------------------------

//! 5. Arrow Functions
const subtract=(a:number,b:number):number=>{
return a-b;
}
console.log(subtract(2,3));
//?---------------------------------------------------------
