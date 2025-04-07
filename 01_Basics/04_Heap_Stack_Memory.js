/*
JavaScript Memory Management - Simplified Notes

1. Two Types of Memory in JavaScript
   Stack Memory → Used for Primitive Data Types (Numbers, Strings, Booleans, etc.).

Call by Value: A copy of the variable is created.

Changes affect only the copy, not the original.

Heap Memory → Used for Non-Primitive (Reference) Data Types (Objects, Arrays, Functions).

Call by Reference: Variables point to the same memory location.

Changes affect all references to that object.

2. Key Differences
   Aspect Stack (Primitive) Heap (Non-Primitive)
   Storage Fixed size, fast access Dynamic size, slower access
   Copy Behavior Independent copy Shared reference
   Example let a = 10; let b = a; → b gets a copy of 10 let obj1 = {}; let obj2 = obj1; → Both point to the same object
3. Practical Examples
   Primitive (Stack) Example
   javascript
   Copy
   let youtubeName = "hiteshchoudhary.com";  
   let anotherName = youtubeName; // Creates a COPY  
   anotherName = "chai aur code"; // Only changes the copy

console.log(youtubeName); // "hiteshchoudhary.com" (unchanged)  
console.log(anotherName); // "chai aur code"  
Why? anotherName gets a new copy in the stack.

Non-Primitive (Heap) Example
javascript
Copy
let userOne = { email: "user@google.com", upi: "user@ybl" };  
let userTwo = userOne; // Shares REFERENCE

userTwo.email = "hitesh@google.com"; // Changes ORIGINAL

console.log(userOne.email); // "hitesh@google.com" (updated)  
console.log(userTwo.email); // "hitesh@google.com"  
Why? Both variables point to the same object in heap.

4. Why This Matters
   Performance: Stack is faster but limited; Heap is flexible but slower.

Debugging: Accidental changes in heap affect all references.

Interview Qs: Common questions on typeof null, pass-by-reference vs pass-by-value.

5. Pro Tips
   typeof null returns "object" (a historical bug in JavaScript).

Garbage Collection: Heap memory is automatically freed when unused (unlike low-level languages like C).

🔗 MDN Reference: JavaScript Memory Management

Visualization
Copy
STACK (Primitive) HEAP (Non-Primitive)  
| let a = 10 | | { obj } |  
| let b = a | ↑  
| b = 20 | | userOne, userTwo point here |  
Like & Reply if this helps! 🚀 #JavaScript #WebDev

Key Takeaways
Primitive → Stack → Independent copies.

Non-Primitive → Heap → Shared references.

null is an object (quirky JS behavior).

Heap changes are global; Stack changes are local.

Let me know if you'd like any modifications! 😊

*/
