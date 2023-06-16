const array1 = ["Aman", "Abhishek", "Abhi"];

console.log(array1);

const array2 = [["Aman", 18], ["Abhishek", 17], ["Sourav", 16]];
console.log(array2);

console.log(array1[1]);
console.log(array2[1][1]);

array1.push("Lath");
console.log(array1);

array2.push(["Lath", 15]);
console.log(array2);

const ele = array1.pop();
console.log(ele);

const ele1 = array1.shift();
console.log(ele1);