const myArray = [
    55,
    3434,
    645,
    1,
    6,
    99,
    545,
    30,
    20
];

const names = [
    "John",
    "Sarah",
    "Anna",
    "David"
];

const result = myArray.map(function(item, index){
    if (item < 99) {
        return {
            firstname: names[index % names.length],
            age: item
        };
    }
});


// !! = (finns den eller finns den inte? true / false)
const noUndefines = result.filter(item => !!item);

console.log(noUndefines);