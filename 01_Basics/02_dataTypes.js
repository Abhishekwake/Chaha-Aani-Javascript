"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 + 3); // code readability should be high

console.log("Hitesh");

let name = "hitesh";
let age = 18;
let isLoggedIn = false;
let state;

// number => 2 to power 53 Range
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => uniqueness

// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

// # **JavaScript Data Types - Notes**

// ## **Introduction**
// - Welcome to "Chai aur Code" – a series dedicated to JavaScript learning.
// - In this video, we discuss **Data Types** in JavaScript and some hidden concepts.
// - **Subscribe & Share** the videos for motivation and continuous learning.

// ---

// ## **Key Points**

// ### **1. Strict Mode in JavaScript**
// - Use `"use strict";` at the beginning of a file to enforce modern JavaScript standards.
// - Ensures cleaner, more secure code by preventing undeclared variables and deprecated features.
// - Example:
//   ```javascript
//   "use strict";
//   let name = "Hitesh";
//   ```
// - **Note:** Modern JavaScript (ES6+) automatically runs in strict mode.

// ### **2. Alert vs Console in Node.js**
// - `alert()` works in browsers but **not in Node.js**.
// - Use `console.log()` for Node.js debugging.
// - Example:
//   ```javascript
//   console.log(3 + 3); // Output: 6
//   ```

// ### **3. Code Readability & Best Practices**
// - **Avoid:** Writing everything in one line (bad practice).
// - **Follow:** Proper indentation, spacing, and line breaks.
// - Example (Bad vs Good):
//   ```javascript
//   // ❌ Bad (Unreadable)
//   console.log(3+3); console.log("Hitesh");

//   // ✅ Good (Readable)
//   console.log(3 + 3);
//   console.log("Hitesh");
//   ```

// ### **4. JavaScript Documentation**
// - **MDN Web Docs** ([developer.mozilla.org](https://developer.mozilla.org/)) – Best for beginners.
// - **ECMAScript (TC39)** ([tc39.es](https://tc39.es/)) – Official JavaScript standards.

// ---

// ## **Data Types in JavaScript**

// ### **Primitive Data Types**
// 1. **Number**
//    - Represents numeric values (integers & decimals).
//    - Example: `let age = 18;`
//    - **BigInt** for very large numbers: `let bigNum = 12345678901234567890n;`

// 2. **String**
//    - Text enclosed in `""`, `''`, or `` `` (template literals).
//    - Example: `let name = "Hitesh";`

// 3. **Boolean**
//    - `true` or `false`.
//    - Example: `let isLoggedIn = true;`

// 4. **Null**
//    - Standalone value representing **empty** or **unknown**.
//    - Example: `let temp = null;`

// 5. **Undefined**
//    - Variable declared but **no value assigned**.
//    - Example: `let state;` (Output: `undefined`)

// 6. **Symbol**
//    - Unique and immutable (used in React, Redux for component IDs).
//    - Example: `const id = Symbol('123');`

// ### **Non-Primitive (Reference) Data Types**
// 1. **Object**
//    - Collection of key-value pairs.
//    - Example:
//      ```javascript
//      let user = { name: "Hitesh", age: 18 };
//      ```

// 2. **Arrays, Functions, etc.**
//    - Special types of objects (discussed later).

// ---

// ## **Checking Data Types (`typeof`)**
// - Use `typeof` to check the type of a variable.
// - Examples:
//   ```javascript
//   console.log(typeof "Hitesh"); // "string"
//   console.log(typeof 18);       // "number"
//   console.log(typeof null);     // "object" (Known JS quirk) Interview Quesition
//   console.log(typeof undefined); // "undefined"
//   ```

// ---

// ## **Null vs Undefined**
// | **Null** | **Undefined** |
// |----------|--------------|
// | **Intentional empty value** | **No value assigned yet** |
// | `let a = null;` | `let b;` (default: `undefined`) |
// | `typeof null` → `"object"` | `typeof undefined` → `"undefined"` |

// ---

// ## **Assignment**
// 1. Visit **TC39** and **MDN Docs** to explore JavaScript specifications.
// 2. Practice different data types using `typeof`.
// 3. Fork & Star the GitHub repo for code examples.

// ---

// ## **Next Steps**
// - In upcoming videos, we’ll cover **Strings, Numbers, and Objects** in detail.
// - **Stay tuned & keep coding!** 🚀

// 🔗 **GitHub Repo:** [Link](#) (Check pinned comment)

// ---

// ### **Personal Notes (Extra Tips)**
// - Always **prefer `let` & `const`** over `var`.
// - Use **template literals** for dynamic strings:
//   ```javascript
//   let greeting = `Hello, ${name}!`;
//   ```
// - **Avoid** `==` (loose equality), use `===` (strict equality).

// Happy Coding! ☕💻
