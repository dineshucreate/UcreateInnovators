
let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

let setValue = new Set(values);

console.log(setValue);

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

let mapArr =new Map();
for (const iterator of arr) {
    mapArr.set(iterator)
}

for (const iterator of mapArr.keys()) {
    console.log(iterator);
    
}


console.log(mapArr.size);


let map = new Map();

map.set("name", "John");

let keys = map.keys();
console.log(keys);



// Error: numbers.push is not a function

