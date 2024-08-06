let a = 10;

// 3. Operation - Math

// 4. Operation - String concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + lastName;
console.log(fullName);

let mix = a + firstName;
console.log(mix);

// 5. Operation - Comparison
let x = 10;
let y = 20;
console.log(x > y); // 10 > 10
console.log(x < y); // 10 < 10
console.log(x >= y);
console.log(x <= y);

// 6. Operation - Equality
let p = 10;
let q = "10";
let r = 11;
console.log(p == r);
console.log(p == q);
// deep equality - same value and same type
console.log(p === r);
console.log(p === q);
//inequality
console.log(p != r);
console.log(p != q);
// deep inequality - different value or different type
console.log(p !== r);
console.log(p !== q);

// 7. Truthy and Falsy
let t = true;
let f = false;
console.log(t, f);

let num = 0;
let num2 = 1;
console.log(Boolean(num)); // false
console.log(Boolean(num2)); // true
// string
let str = "";
let str2 = " ";
console.log(Boolean(str)); // false
console.log(Boolean(str2)); // true
// array
let arr = [];
let arr2 = [1, 2, 3];
console.log(Boolean(arr)); // false
console.log(Boolean(arr2)); // true
// object
let obj = {};
let obj2 = { name: "John" };
console.log(Boolean(obj)); // false
console.log(Boolean(obj2)); // true
// null
let n = null;
console.log(Boolean(n)); // false
// undefined
let u;
console.log(Boolean(u)); // false
// Reference material: > MDN portal
