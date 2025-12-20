# Functions in TypeScript

---

## What is a Function?

A function is a reusable block of code that performs a specific task.

In TypeScript, functions are enhanced with **type annotations** to prevent errors.

---

## Function Syntax in TypeScript

```ts
function functionName(parameter: type): returnType {
  return value;
}
```

---

## Function with Typed Parameters and Return Type

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

❌ Error example:

```ts
// add(2, "3");
```

---

## Function with No Return Value (`void`)

```ts
function greet(name: string): void {
  console.log(`Hello ${name}`);
}
```

📌 `void` means the function does not return anything.

---

## Optional Parameters

Use `?` to make parameters optional.

```ts
function printName(firstName: string, lastName?: string): void {
  console.log(firstName, lastName);
}
printName("jagat","joshi");
printName("jagat");
```

---

## Default Parameters

```ts
function multiply(a: number, b: number = 2): number {
  return a * b;
}
console.log(`Multiplication ${multiply(2)}`) //4
console.log(`Multiplication ${multiply(2,5)}`)//We can again pass another value... //10
```

---

## Arrow Functions

```ts
const subtract = (a: number, b: number): number => {
  return a - b;
};
```
---

## Key Points

* Always type function parameters
* Define return types for clarity
* Use `void` for functions without return values
* Optional and default parameters improve flexibility
* Arrow functions are commonly used

---

## Summary

Functions in TypeScript provide type safety for inputs and outputs, reducing runtime errors and making code easier to understand and maintain.

---


