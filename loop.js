let i = 0;

while (i<5){
    console.log(i);
    i++;
}

for (i; i < 10; i++) {
    console.log(i);
}

const arr = [10,9,8,7,6,5,4,3,2,1];
for (let j = 0; j < arr.length; j++){
    console.log(arr[j]);
}

const arr1 = [[1,2],[2,3],[3,4]];
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
        console.log(arr1[i][j]);
        
    }
    
}

const arr2 = [];
let k = 0;

do {
  arr2.push(k);
  k++;
} while (k < 5);

for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
    
}

const a = parseInt("10");
console.log(a);