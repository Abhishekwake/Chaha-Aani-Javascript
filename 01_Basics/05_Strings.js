const name = "hitesh";
const repoCount = 50;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//it is more readable then the concatenation and is modern way of it and
// it is called as String Interpolation

const gameName = new String("hitesh-hc-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-"));

/*
### **JavaScript Strings - Comprehensive Notes**  

#### **1. String Basics**  
- **Definition**:  
  - Strings can be declared using **single (`''`) or double (`""`) quotes**.  
  - **Example**:  
    ```javascript
    let name = "Hitesh";
    let channel = 'Chai aur Code';
    ```  

- **Concatenation**:  
  - Old method (avoid):  
    ```javascript
    let greeting = "Hello" + " " + name;  // "Hello Hitesh"
    ```  
  - Modern method (**Template Literals**):  
    ```javascript
    let greeting = `Hello ${name}`;  // Backticks (`) + ${variable}
    ```  

---

#### **2. String Methods**  

| **Method**          | **Description**                                  | **Example**                              |  
|---------------------|------------------------------------------------|------------------------------------------|  
| `toUpperCase()`     | Converts to uppercase                          | `"hitesh".toUpperCase()` → `"HITESH"`    |  
| `toLowerCase()`     | Converts to lowercase                          | `"HITESH".toLowerCase()` → `"hitesh"`    |  
| `charAt(index)`     | Returns character at specified index           | `"Hitesh".charAt(0)` → `"H"`             |  
| `indexOf("substr")` | Returns first index of substring               | `"Hitesh".indexOf("t")` → `2`            |  
| `slice(start, end)` | Extracts part of a string (end not included)   | `"Hitesh".slice(0, 3)` → `"Hit"`         |  
| `substring(start, end)` | Similar to `slice` (no negative indices)  | `"Hitesh".substring(1, 4)` → `"ite"`     |  
| `replace(old, new)` | Replaces first occurrence of a substring       | `"Hello".replace("H", "J")` → `"Jello"`  |  
| `trim()`            | Removes whitespace from both ends              | `"  Hitesh  ".trim()` → `"Hitesh"`       |  
| `split(separator)`  | Splits string into an array based on separator | `"H-i-t".split("-")` → `["H", "i", "t"]` |  
| `includes("substr")`| Checks if substring exists (returns boolean)   | `"Hitesh".includes("esh")` → `true`      |  

---

#### **3. String Properties**  
- **`length`**: Returns the number of characters.  
  ```javascript
  "Hitesh".length;  // 6
  ```  

- **Accessing Characters**:  
  ```javascript
  let name = "Hitesh";
  name[0];  // "H" (same as `charAt(0)`)
  ```  

---

#### **4. Advanced String Concepts**  
1. **String Immutability**:  
   - Strings are **immutable** (cannot be changed directly).  
   - Methods like `toUpperCase()` return a **new string**.  
   ```javascript
   let str = "hello";
   str[0] = "H";  // Fails silently (no error)
   console.log(str);  // "hello"
   ```  

2. **Negative Indices in `slice()`**:  
   ```javascript
   "Hitesh".slice(-3);  // "esh" (last 3 characters)
   ```  

3. **Escape Characters**:  
   ```javascript
   "Line 1\nLine 2";  // Newline
   "He said, \"Hi\""; // Escaped quotes
   ```  

4. **Multi-line Strings**:  
   ```javascript
   let poem = `Roses are red,
   Violets are blue`;  // Backticks allow multi-line
   ```  

---

#### **5. Practical Examples**  
1. **URL Sanitization**:  
   ```javascript
   let url = "https://hitesh%20choudhary.com";
   let cleanUrl = url.replace("%20", "-");  // "https://hitesh-choudhary.com"
   ```  

2. **Username Formatting**:  
   ```javascript
   let username = "  hitesh123  ";
   let formatted = username.trim().toUpperCase();  // "HITESH123"
   ```  

3. **Extracting Domain from Email**:  
   ```javascript
   let email = "user@example.com";
   let domain = email.split("@")[1];  // "example.com"
   ```  

---

### **Key Takeaways**  
- **Use Template Literals** (` `` `) for modern string interpolation.  
- **Strings are primitive** but have object-like methods (auto-boxing).  
- **`slice()` vs `substring()`**: Prefer `slice()` (supports negative indices).  
- **Always sanitize user input** (e.g., `trim()` for forms).  

🔗 **MDN Reference**: [JavaScript Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)  

**Like & Share** if this helps! 🚀 #JavaScript #WebDev  

---  

### **Interview Questions**  
1. **Q**: Why does `"Hitesh".charAt(0)` return `"H"` but `"Hitesh"[0] = "h"` doesn’t change the string?  
   **A**: Strings are immutable; indexing is read-only.  

2. **Q**: How to reverse a string?  
   **A**:  
   ```javascript
   "Hitesh".split("").reverse().join("");  // "hsetiH"
   ```  

3. **Q**: What’s the difference between `==` and `===` when comparing strings?  
   **A**: `===` checks type + value; `"5" == 5` is `true` but `"5" === 5` is `false`.  

Let me know if you'd like any additions! 😊
*/
