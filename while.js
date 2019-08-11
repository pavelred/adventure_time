
var a = 100;
do {
    a -= 1;
    console.log(a);
} while (a > 10); //делает до тех пор пока условие не станет ложным

for (var b = 2; b <= 10; b+=2) {
        console.log(b);
}

for (var c = 2; c <= 10; c++) {
    if (c % 2 === 0) {
        console.log(c);
    }
}

var i = 0;
while (i < 3) {
    console.log("номер " + i + "!");
    i++;
}

for (var k = 0; k < 3; k++) {
    console.log( "номер " + k + "!" );
}

var numberFromUser;
do {
    numberFromUser = +prompt("Введите число от 0 до 150:", "");

} while (numberFromUser <= 100 && numberFromUser != null && typeof numberFromUser === 'number'); {
    alert("Good boy");
}

var i;
justNumber:
    for (i = 2; i <= 100; i++) {
        //   console.log(i);
        for (var n = 2; n < i; n++ ){
            if (i % n == 0) continue justNumber;
        }
        console.log(i);
    }

