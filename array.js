/*
pop удаляет последний элемент из массива
push добавляет в конец массива
shift первый элемент из массива
unshift добавляет элемент в начало массива
*/

var tabacco = ["Cheery", "Apple", "Dark", "Chocolate"];
for (var i = 0; i < tabacco.length; i++) {
    console.log(tabacco[i]);
}

var firm = ["Dell","Apple","Samsung","Sony"];
console.log("Вывод массива:");
console.log(firm);
var firmString = firm.join(', ');
console.log("Вывод строки:");
console.log(firmString);


var colors = "Red, Green, Blue, White";
console.log(colors);
var colorsArray = colors.split(', ');
console.log(colorsArray);

var animals = ["Dog", "Cat", "Parrot", "Fish", true, 6, "Shark"];
for (var n = 0; n < animals.length; n++) {
    animals[n] = "hello " + animals[n];
}
console.log(animals);

var numberArr = [1, 2, 3, 4, 5, 6, 7, 8, -1, 0];
numberArr = numberArr.map(Boolean);
console.log(numberArr);

