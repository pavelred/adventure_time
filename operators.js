//объявляем переменную
var logitech = 200;
//присваеваем унарный минус
var newlogitech = -logitech;
//выводим
console.log(newlogitech);

var promo = 20;
logipromo = logitech - promo;
console.log(logipromo);

console.log(String(logitech)+' '+String(promo));

var laptop = "50";
var dell = "50";
console.log( +laptop + +dell);
console.log(laptop + dell);
console.log(700 - laptop);

//взятие остатка
cash = 800;
gift = 359;
console.log( cash % gift );

//инкремент
var x = 25;
x++;
console.log(x);//26

//инкремент с отрицательным числом
var xx = -25;
xx++;
console.log(xx);//-24

//преобразует в числовое и добавляет единицу (0+1=1)
var booltest = false;
booltest++;
console.log(booltest);

//декремент
var ld = 25;
ld--;
console.log(ld);

var ld2 = 0;
ld2--;
console.log(ld2);

//постфикс и префикс (x++ возвращает старое значение)
var ferum = 5;
nf = ferum++;
console.log(nf);//5
ng = ++ferum;
console.log(ng);//7

//присваивание
var iphone = 10;
++iphone;//11
iphone += 5 * 2 + iphone++; //11+10+11=32
console.log(iphone);

//запятая
var k = 5, l = 5, j = 5;
j++;//6
++k;//5
mel = l + 5;//10
console.log(k,l,mel);
