// 1. DataTypes in Javascript
let name = "Alice";
let greeting = `Hello, ${name}!`; // Template literal

let age = 30;
let price = 19.99;
let invalid = NaN; // "Not a Number"
let infinity = Infinity;

let largeNumber = 9007199254740991n;

let isLoggedIn = true;
let hasPermission = false;

let unassignedVariable;
console.log(unassignedVariable); // Output: undefined

let currentSelection = null;

let id = Symbol("userId");

let user = {
  name: "Alice",
  age: 30,
  isLoggedIn: true
};

let colors = ["red", "green", "blue"];

function addNumbers(a, b) {
  return a + b;
}

console.log(typeof(greeting));
console.log(typeof(price));
console.log(typeof(colors));
console.log(typeof(isLoggedIn));
console.log(typeof(user));

// 2. Operators in javascript
console.log("--- Arithmetic Operators ---");
let num1 = 10;
let num2 = 3;

console.log("Addition (10 + 3):", num1 + num2);          // 13
console.log("Subtraction (10 - 3):", num1 - num2);       // 7
console.log("Multiplication (10 * 3):", num1 * num2);    // 30
console.log("Division (10 / 3):", num1 / num2);          // 3.3333...
console.log("Modulus/Remainder (10 % 3):", num1 % num2); // 1
console.log("Exponentiation (10 ** 3):", num1 ** num2);  // 1000

console.log("\n--- Assignment Operators ---");
let score = 50;

score += 10; // Equivalent to: score = score + 10
console.log("score += 10:", score); // 60

score *= 2;  // Equivalent to: score = score * 2
console.log("score *= 2:", score);  // 120


// 3. Conditionals

console.log("--- 1. Simple IF ---");
let isRaining = true;

if (isRaining) {
  console.log("Take an umbrella!");
}

console.log("\n--- 2. IF...ELSE ---");
let userAge = 16;

if (userAge >= 18) {
  console.log("Access granted: You are an adult.");
} else {
  console.log("Access denied: You are a minor.");
}


console.log("\n--- 3. IF...ELSE IF...ELSE Ladder ---");
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}


console.log("\n--- 4. Nested Conditionals ---");
let hasAccount = true;
let isPasswordCorrect = true;

if (hasAccount) {
  if (isPasswordCorrect) {
    console.log("Login successful! Welcome back.");
  } else {
    console.log("Incorrect password.");
  }
} else {
  console.log("Account does not exist. Please sign up.");
}


// 4. Loops in JS

console.log("--- 1. Standard FOR Loop ---");
// Ideal when you know the exact number of iterations in advance
for (let i = 1; i <= 3; i++) {
  console.log(`Standard loop iteration: ${i}`);
}

console.log("\n--- 2. WHILE Loop ---");
// Runs as long as the condition remains true
let count = 3;
while (count > 0) {
  console.log(`Countdown: ${count}`);
  count--;
}

console.log("\n--- 3. DO...WHILE Loop ---");
// Guarantees execution AT LEAST ONCE, even if condition starts as false
let num = 10;
do {
  console.log(`Executed once despite condition being false (num = ${num})`);
  num++;
} while (num < 5);

console.log("\n--- 4. FOR...OF Loop (Arrays & Strings) ---");
const fruits = ["Apple", "Banana", "Cherry"];

// Loop over Array values directly
for (const fruit of fruits) {
  console.log(`Fruit: ${fruit}`);
}

// Loop over String characters
const word = "JS";
for (const char of word) {
  console.log(`Character: ${char}`);
}

// 5. Functions in JS 

console.log("--- 1. Function Declaration ---");
// Declarations are hoisted (can be called before they appear in code)
console.log(greetUser("Alice")); // Works due to hoisting!

function greetUser(name) {
  return `Hello, ${name}! Welcome back.`;
}

console.log("\n--- 2. Function Expression ---");
// Stored in a variable. Not hoisted (must be defined before calling)
const calculateArea = function(width, height) {
  return width * height;
};

console.log("Area (5 x 4):", calculateArea(5, 4)); // 20

console.log("\n--- 3. Arrow Functions ---");

// A. Concise / Implicit Return (single expression, no 'return' keyword needed)
const double = num => num * 2;
console.log("Double of 6:", double(6)); // 12

// B. Multi-line / Explicit Return (requires curly braces and 'return')
const getSquareAndCube = num => {
  const square = num ** 2;
  const cube = num ** 3;
  return { square, cube };
};
console.log("Square & Cube of 3:", getSquareAndCube(3)); // { square: 9, cube: 27 }


// 6. Read an Object Property
const book = { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310 };

function getBookSummary(b) {
  return `${b.title} by ${b.author} has ${b.pages} pages.`;
}

console.log(getBookSummary(book));
// Output: The Hobbit by J.R.R. Tolkien has 310 pages.

// 7. Add and Delete Object Keys
const user = {};
user.name = "Alex";
user.age = 25;

user.age = 26; // Update age
delete user.name; // Delete name

console.log(user); 
// Output: { age: 26 }

// 8. Array
const colors = ["Red", "Green", "Blue"];

// Access the first item (JavaScript starts counting at index 0)
console.log(colors[0]); // Output: Red
// 9. Array Push and Pop

const fruits = ["apple", "banana"];
fruits.push("cherry"); // Add to end
fruits.shift();       // Remove from front

console.log(fruits); 
// Output: ['banana', 'cherry']

// 10. Find the Maximum Number in an Array

function findMax(numbers) {
  return Math.max(...numbers);
}

console.log(findMax([3, 7, 2, 9, 5])); 
// Output: 9

// 11. Sum All Numbers in an Array

function sumArray(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray([10, 20, 30, 40])); 
// Output: 100

// 12. Filter Even Numbers

function getEvens(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

console.log(getEvens([1, 2, 3, 4, 5, 6])); 
// Output: [2, 4, 6]

// 13. Object
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "Silver"
};

console.log(car.brand); // Output: Toyota

// 14. simple object
const dog = {
  name: "Buddy",
  breed: "Golden Retriever",
  bark: function() {
    return "Woof woof!";
  }
};

console.log(dog.bark()); // Output: Woof woof!

// 15. Extract Property Values from an Array of Objects

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

function getNames(arr) {
  return arr.map(user => user.name);
}

console.log(getNames(users)); 
// Output: ['Alice', 'Bob', 'Charlie']

// 16. Find Object by Property
const products = [
  { id: 101, name: "Laptop" },
  { id: 102, name: "Phone" },
  { id: 103, name: "Tablet" }
];

function findProductById(arr, id) {
  return arr.find(product => product.id === id);
}

console.log(findProductById(products, 102)); 
// Output: { id: 102, name: 'Phone' }

// 17. Count Occurrences of Items

const votes = ["yes", "no", "yes", "yes", "no", "maybe"];

function countOccurrences(arr) {
  return arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
}

console.log(countOccurrences(votes));
// Output: { yes: 3, no: 2, maybe: 1 }

// 18. template literals
const name = "Alex";
const age = 25;

// Using Template Literals
const message = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(message);
// Output: Hello, my name is Alex and I am 25 years old.

// 19. Function
function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false

// 20. call back Function
const numbers = [1, 2, 3, 4];

// Using an inline function to double every item
const doubled = numbers.map(num => num * 2);

console.log(doubled); 
// Output: [2, 4, 6, 8]