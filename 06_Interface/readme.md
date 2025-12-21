# What is an Interface?

An **interface** defines the structure of an object.

It tells TypeScript:

* What properties an object must have
* What the types of those properties are

> **Interface = rulebook for objects**

---

## 1️⃣ Basic Interface

```ts
interface User {
  name: string;
  age: number;
  isActive: boolean;
}

let user: User = {
  name: "Jagat",
  age: 24,
  isActive: true
};
```

❌ Errors occur if:

* A property is missing
* A property type is incorrect
* An extra property is added

---

## 2️⃣ Interface vs Inline Object Type

### Inline Object Type (Not Reusable)

```ts
let user: { name: string; age: number };
```

### Interface (Reusable & Clean)

```ts
interface User {
  name: string;
  age: number;
}

let user1: User = {
  name: "Jagat",
  age: 24
};
```

📌 **Best Practice:** Use interfaces instead of inline object types.

---

## 3️⃣ Optional Properties

Use `?` when a property is not always required.

```ts
interface Student {
  name: string;
  age?: number;
}

let student: Student = {
  name: "Jagat Joshi"
};
```

---

## 4️⃣ Readonly Properties

Readonly properties cannot be changed after initialization.

```ts
interface Product {
  readonly id: number;
  name: string;
}

const product: Product = {
  id: 101,
  name: "iPhone"
};

// product.id = 102; ❌ Error
```

📌 Commonly used for IDs, tokens, and constants.

---

## 5️⃣ Interface with Methods

Interfaces can also define function signatures.

```ts
interface Person {
  name: string;
  greet(): void;
}

const person1: Person = {
  name: "Jagat Joshi",
  greet() {
    console.log("Hello Jagat Bro!");
  }
};
```

---

## 6️⃣ Interface for Function Types

Interfaces can describe the shape of a function.

```ts
interface Add {
  (a: number, b: number): number;
}

const addNumbers: Add = (x, y) => x + y;
```

---

## 7️⃣ Extending Interfaces (Very Important)

Interfaces can inherit from other interfaces using `extends`.

```ts
interface User {
  id: number;
  name: string;
  age: number;
}

interface Admin extends User {
  isAdmin: boolean;
}

let admin1: Admin = {
  id: 101,
  name: "Jagat Joshi",
  age: 24,
  isAdmin: true
};
```

---

## 8️⃣ Interface Merging (Interface-only Feature)

Multiple interfaces with the same name are automatically merged.

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

let user2: User = {
  name: "Jagat",
  age: 20
};
```

❗ This feature is **not available** with type aliases.

---


