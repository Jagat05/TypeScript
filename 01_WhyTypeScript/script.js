function sum(num1, num2) {
  let sumResult = num1 + num2;
  console.log(`Sum: ${sumResult}`);
  // console.log(typeof sumResult); -->String
}
sum(5, "10");

// Output: Sum: 510 -->It doesn't throw any error it simply perform computation & return the typeof sumResult into string
