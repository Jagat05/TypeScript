// ! 1.Object with Inline Type
//Missing or extra property → Error
let user:{
  name:string;
  age:number;
  isAdmin:boolean;
}={
  name:"Jagat",
  age:20,
  isAdmin:true
  //if i left any alue it show error
};
console.log(user);

//! 2.Object with Optional Properties
let student:{
  name:string;
  age?:number;
}={
  name:"Jagat",
};
console.log(student);

//! 3.Type Alias for Objects (Best Practice)

type User={
  name:string;
  age:number;
  isActive:boolean;
}
let user1:User={
  name:"Jagat",
  age:24,
  isActive:true
}