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

/*
    prev = det vi senast returnerade i loopen.
    current = nuvarande item i `myArray`.
*/
const myObject = myArray.reduce(function(prev, current) {
    let array = [];

    if (typeof prev === "object") {
        array = prev.numbers.concat(current);
    } else {
        array = [current];
    }

    return {                 // nasta gang i loopen, kommer `prev` bli detta.
        numbers: array
    };
});

console.log(myObject);