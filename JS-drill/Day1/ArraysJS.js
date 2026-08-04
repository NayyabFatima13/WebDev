// 1 : Convert prices in USD to EUR (assuming 1 USD = 0.92 EUR)
const pricesInUSD = [10, 25, 50, 100];

const pricesInEUR = pricesInUSD.map(price => price * 0.92);

console.log(pricesInEUR); 
// Output: [9.2, 23, 46, 92]

// 2: Find all users who are 18 or older
const users = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 15 },
  { name: 'Diana', age: 30 }
];

const adults = users.filter(user => user.age >= 18);

console.log(adults);
// Output: [ { name: 'Bob', age: 22 }, { name: 'Diana', age: 30 } ]


// 3: Calculate the total sum of numbers in an array
const expenses = [45, 120, 15, 80];

const totalExpense = expenses.reduce((accumulator, currentExpense) => {
  return accumulator + currentExpense;
}, 0); // 0 is the starting value of accumulator

console.log(totalExpense); 
// Output: 260


// 4
const inventory = [
  { name: 'Laptop', price: 1000, quantity: 2, inStock: true },
  { name: 'Mouse', price: 25, quantity: 5, inStock: false },
  { name: 'Keyboard', price: 75, quantity: 3, inStock: true },
];

const totalInStockValue = inventory
  .filter(item => item.inStock)
  .map(item => item.price * item.quantity)
  .reduce((sum, itemTotal) => sum + itemTotal, 0);

console.log(totalInStockValue); // 2225

// 5
const students = [
  { name: 'alice', score: 85 },
  { name: 'bob', score: 58 },
  { name: 'charlie', score: 92 },
  { name: 'diana', score: 45 }
];

const passingList = students
  .filter(student => student.score >= 60)
  .map(student => student.name.toUpperCase())
  .reduce((acc, name, index) => index === 0 ? name : `${acc}, ${name}`, '');

console.log(passingList); // "ALICE, CHARLIE"