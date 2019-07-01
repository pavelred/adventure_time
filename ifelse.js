//Задание 1
if ("0") {
    console.log('Hi, Pavel')
}

//Задание 2
var ask = prompt('Каково «официальное» название JavaScript?', '');
if (ask == 'ECMAScript') {
    alert('верно');}
else {
    alert('Не знаете? «ECMAScript»!')
}

//Задание 3
var znak = prompt('Введите число:', '');
var x;
if (znak > 0){
        x = 1;
        alert(x);}
    else if (znak < 0) {
        x = -1;
        alert(x);
    }
    else {
        x = 0;
        alert(x);
    }

//Задание 4
var username = prompt('Кто пришел?', '');
    if (username == 'Админ') {
        var password = prompt('Пароль?', '');
        if (password == 'Черный Властелин') {
            alert('Добро пожаловать!');
        }
        else if (password == null) {
            alert('Вход отменен');
        }
        else {
            alert('Пароль неверен');
        }
    }
    else if (username == null) {
        alert('Вход отменён');
    }
    else {
        alert('Я вас не знаю');
    }

    /* заметка, если я сравнивал =, а не ==, система пускала меня дальше после ввода любой строки */

//Задание 5
//Перепишите if с использованием оператора '?':

if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
}

//Решение:
result = (a + b < 4) ? 'Мало' : 'Много';

//Задание 5
var message;

if (login == 'Вася') {
    message = 'Привет';
} else if (login == 'Директор') {
    message = 'Здравствуйте';
} else if (login == '') {
    message = 'Нет логина';
} else {
    message = '';
}
//Перепишите if..else с использованием нескольких операторов '?'.
var login = prompt('Введите логин:', '');
var message = (login == 'Вася') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' : 'Нет логина';
alert(message);
