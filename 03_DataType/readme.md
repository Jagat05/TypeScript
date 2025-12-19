# TypeScript Data Types 

---

## Number Type

Used for all kinds of numbers (integers, decimals, negatives).

```ts
let age: number = 25;
let price: number = 99.99;
let temperature: number = -10;
```

❌ Error example:

```ts
// age = "25";
// Type 'string' is not assignable to type 'number'
```

---

## String Type

Used for textual data.

```ts
let name: string = "Jagat";
let city: string = 'Dhangadhi';
let intro: string = `My Name is ${name} and I am from ${city}`;
```

❌ Error example:

```ts
// name = 10;
```

---

## Boolean Type

Used for true / false values.

```ts
let isLoggedIn: boolean = true;
let hasPermission: boolean = false;
```

❌ Error example:

```ts
// isLoggedIn = "true";
```

---

## any Type (Use Carefully ⚠️)

Allows any type of value. This removes TypeScript safety.

```ts
let value: any = 20;
value = "Hello";
value = true;
```

❗ Avoid using `any` unless absolutely necessary.

---

## unknown Type (Safer than any)

Allows any value, but requires type checking before use.

```ts
let data: unknown;
data = 10;
data = "hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

---

## null and undefined

### null

Used as an intentional empty value.

```ts
let y: null = null;
let result: number | null = null;
```

### undefined

Declared but not assigned.

```ts
let x: undefined;
```

---

## Arrays

Store multiple values of the same type.

```ts
let marks: number[] = [80, 90, 85];
let names: string[] = ["A", "B", "C"];
let scores: Array<number> = [10, 20, 30];
```

❌ Error example:

```ts
// marks.push("90");
```

---

## Tuple

Fixed-length array with fixed types and order.

```ts
let user: [string, number] = ["Alex", 20];
```

---

## Object Type

Defines the structure of an object.

```ts
let user1: {
  name: string;
  age: number;
} = {
  name: "Alex",
  age: 20
};
```

---

## Type Alias

Used to reuse object structures.

```ts
type User = {
  name: string;
  age: number;
};

let user2: User = {
  name: "Sam",
  age: 22
};
```

---

## Enum

Used for a fixed set of named values.

```ts
enum Status {
  Pending,
  Success,
  Failed
}

let currentStatus: Status = Status.Success;
```

---

## void

Used for functions that do not return a value.

```ts
function logMessage(msg: string): void {
  console.log(msg);
}

logMessage("Hello User!");
```

---

## never

Used for functions that never finish execution.

```ts
function throwError(): never {
  throw new Error("Error");
}
```

---

## Type Inference

TypeScript automatically determines types when not explicitly defined.

```ts
let count = 5; // inferred as number
// count = "five"; // Error
```




