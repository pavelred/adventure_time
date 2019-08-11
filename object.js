var pavel = {};
pavel.age = 23;
pavel.name = "Pavel";
pavel.surname = "Sapronchik";
pavel.size = "L";
console.log(pavel);
pavel.surname = "Sapron";
console.log(pavel);

pavel.sum = function (FirsNumber, SecondNumber) {
    var result = FirsNumber + SecondNumber;
    return result;
};

console.log(pavel.sum(10, 5));
