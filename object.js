const cat = {
    "name": "Aman Lath",
    "age": 19,
    "your height" : "5.9"
};

var name = cat.name;
var age = cat.age;
console.log(name);
console.log(age);

const height=cat["your height"];
console.log(height);

name = cat.name = "Abhishek";
console.log(name);

age = cat.age = 15;
console.log(age);

const age1 = cat.age;
console.log(age1);

cat.feet = 4;
const feet = cat.feet;
console.log(feet);