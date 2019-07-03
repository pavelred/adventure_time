var a = 'boroda';
var b = 1;
var c = true;
var d = null;
var e = undefined;
var f = Symbol(a);
var g = {
    name: a
};
var makaka = '2';
//строка + число = строка
console.log(a+b);
//число - булевое = преобразование к числу
console.log(b-c);
//булевое разделил на null = деление на ноль = бесконечность (1/0=)
console.log(c/d);
//null умножил пустое значение = NaN (не число)
console.log(d*e);
// преобразование строки в число - явное преобразование
console.log(Number(c));
console.log(Number(makaka));
//конкатинация строк
console.log(makaka+a);
console.log(makaka+makaka);
//перевёл из строк в число и сложил
console.log(Number(makaka)+Number(makaka));

