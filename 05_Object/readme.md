# Objects in TypeScript

## 1️⃣ Object with Inline Type

You can define the structure of an object directly where it is declared.

```ts
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
} = {
  name: "Jagat",
  age: 20,
  isAdmin: true
};

console.log(user);
```

📌 Rules:

* All properties must be provided
* Extra or missing properties cause an error

---

## 2️⃣ Object with Optional Properties

Use `?` to make a property optional.

```ts
let student: {
  name: string;
  age?: number;
} = {
  name: "Jagat"
};

console.log(student);
```

📌 Use optional properties when some data may not always be available.

---

## 3️⃣ Type Alias for Objects (Best Practice)

Type aliases allow you to reuse object structures and keep code clean.

```ts
type User = {
  name: string;
  age: number;
  isActive: boolean;
};

let user1: User = {
  name: "Jagat",
  age: 24,
  isActive: true
};
```

📌 Why use type aliases?

* Reusable object structure
* Cleaner and more readable code
* Commonly used in real projects

---

## Summary

Objects in TypeScript use strict typing to ensure correct structure.

---

