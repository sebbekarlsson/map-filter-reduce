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

const result = myArray.filter(function(item){
    return item < 500;
});


console.log(result);