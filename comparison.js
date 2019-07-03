var a,b,c,d,e,g;
console.log(a,b,c,d,e,g);
a = 5;
b = 7;
c = true;
d = false;
e = 'kisa';
g = 'sobaka';
console.log('------------------------------------');
console.log(a,b,c,d,e,g);

console.log( a > b ); // false
console.log( a == b ); // false
console.log( a != b ); // true
console.log( c > d); //true
console.log( c < d); //false
console.log( e > g); //false
console.log( e > c); //false
console.log( g > c); //false
console.log( (a += 2) == b); //true

// == не может отличить 0 от false
console.log( 0 == false ); //true

// === и !== строгое равенство
console.log( 0 === false ); //false из-за разных типов
console.log( 0 !== false ); //true , но не понимаю почему UPD: понял, потому что это проверка на НЕ равно

//null & undefined
// null если приобразовать к числу 0, а если undefined, то NaN

console.log(null>0);
console.log(null==0);
console.log(null>=0);

//undefined нельзя сравнивать
console.log(undefined>0);
console.log(undefined<0);
console.log(undefined==0);
console.log(undefined===0);
