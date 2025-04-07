//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ### **JavaScript Data Types - Summary Notes**

// #### **1. Categories of Data Types**
// JavaScript data types are **officially divided into two categories**:
// - **Primitive (Call by Value)**
// - **Non-Primitive / Reference Type (Call by Reference)**

// The difference lies in **how they are stored and accessed in memory**.

// ---

// ### **2. Primitive Data Types (7 Types)**
// Primitive types are **call by value**—when copied, a **new memory location** is created instead of sharing a reference.

// | Data Type      | Description | Example |
// |---------------|------------|---------|
// | **String**    | Textual data | `"Hello"`, `'JavaScript'` |
// | **Number**    | Numeric values (integers, decimals) | `100`, `3.14` |
// | **Boolean**   | `true` or `false` | `true`, `false` |
// | **null**      | Represents **intentional absence** of value (empty) | `let temp = null;` |
// | **undefined** | Variable declared but **no value assigned** | `let email;` → `undefined` |
// | **Symbol**    | **Unique** identifier (used in React, etc.) | `const id = Symbol('123');` |
// | **BigInt**    | Large integers (suffix `n`) | `const bigNum = 12345678901234567890n;` |

// #### **Key Points:**
// - `null` vs `undefined`:
//   - `null` → **Explicitly empty**.
//   - `undefined` → **Not assigned yet**.
// - `Symbol` → Used for **uniqueness** (e.g., React component keys).
// - `BigInt` → For **very large numbers** (beyond `Number` limit).

// ---

// ### **3. Non-Primitive (Reference) Data Types**
// These are **call by reference**—when copied, they **share the same memory reference**.

// | Data Type | Description | Example |
// |----------|------------|---------|
// | **Array**   | Ordered list of values | `["ironman", "thor", "hulk"]` |
// | **Object**  | Key-value pairs (properties) | `{ name: "Hitesh", age: 30 }` |
// | **Function** | Reusable code block (also an object) | `const myFunc = function() { console.log("Hello"); }` |

// #### **Key Points:**
// - **Arrays** → `[]` syntax.
// - **Objects** → `{}` syntax (can store any data type).
// - **Functions** → Can be stored in variables (`function() {}`).

// ---

// ### **4. Checking Data Types (`typeof` Operator)**
// - **Primitive Types:**
//   ```javascript
//   console.log(typeof "hello");      // "string"
//   console.log(typeof 42);           // "number"
//   console.log(typeof true);         // "boolean"
//   console.log(typeof null);         // "object" (⚠️ Known JS quirk!)
//   console.log(typeof undefined);    // "undefined"
//   console.log(typeof Symbol('id')); // "symbol"
//   console.log(typeof 100n);         // "bigint"
//   ```

// - **Non-Primitive Types:**
//   ```javascript
//   console.log(typeof [1, 2, 3]);    // "object"
//   console.log(typeof { name: "Hitesh" }); // "object"
//   console.log(typeof function() {}); // "function" (but technically a function object)
//   ```

// #### **Interview Tip:**
// - `typeof null` returns `"object"` (historical bug in JavaScript).
// - Functions are **callable objects** (hence `typeof` returns `"function"`).

// ---

// ### **5. Dynamic vs Static Typing**
// - **JavaScript is dynamically typed**: No need to declare variable types.
//   ```javascript
//   let x = 100;    // Number
//   x = "hello";    // Now a string
//   ```
// - **TypeScript** (JS superset) adds **static typing** (e.g., `let y: number = 10;`).

// ---

// ### **6. Memory Allocation**
// - **Primitive**: Stored in **stack memory** (copied by value).
// - **Non-Primitive**: Stored in **heap memory** (referenced by pointer).

// ---

// ### **Summary Table (Return Types of `typeof`)**
// | Value          | `typeof` Return |
// |----------------|----------------|
// | `"hello"`      | `"string"`     |
// | `42`           | `"number"`     |
// | `true`         | `"boolean"`    |
// | `null`         | `"object"`     |
// | `undefined`    | `"undefined"`  |
// | `Symbol('id')` | `"symbol"`     |
// | `100n`         | `"bigint"`     |
// | `[1, 2, 3]`    | `"object"`     |
// | `{ name: "Hitesh" }` | `"object"` |
// | `function() {}`| `"function"`   |

// ---

// ### **Key Takeaways for Interviews**
// 1. **Primitive** = Call by Value (7 types).
// 2. **Non-Primitive** = Call by Reference (Array, Object, Function).
// 3. `typeof null` → `"object"` (remember this exception!).
// 4. **Dynamic Typing** → Variables can change types.

// ---

// **🔗 Official Docs:** [MDN Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

// Let me know if you'd like any modifications or additions! 🚀
