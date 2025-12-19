## TypeScript Compiler (tsc)

TypeScript code cannot run directly in the browser or Node.js.
It must be **compiled** into JavaScript using the TypeScript compiler (`tsc`).

---

## Installing TypeScript (Global)

To use the `tsc` command in the terminal, install TypeScript globally:

```bash
npm install -g typescript
```

Check installation:

```bash
tsc --version
```

---

## Compiling a TypeScript File

Create a file:

```ts
// example.ts
function add(a: number, b: number): number {
  return a + b;
}
```

Compile it:

```bash
tsc example.ts
```

This generates:

```js
// example.js
function add(a, b) {
  return a + b;
}
```

---

## Important Points

* TypeScript checks code **before execution**
* Compilation converts `.ts` → `.js`
* JavaScript output can run anywhere
* Errors must be fixed before successful compilation

---

## Current Learning Stage

* Understanding TypeScript basics
* Writing `.ts` files
* Compiling TypeScript to JavaScript

---

Happy Learning 🚀
