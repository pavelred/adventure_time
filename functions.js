function showPlus(firstNumber, secondNumber) {
    var result = firstNumber + secondNumber;
    return result;
}
console.log(showPlus(5, 10));

function searchName(inputName) {
    const myName = "Pavel";
    if (myName === inputName) {
        console.log("Hello " + myName);
    }else console.log("That is not my name - pidor!");
}

searchName('Nikita');

function showTypeConsole(type) {
    console.log(typeof type)
}

showTypeConsole(true);



function showEven(inputArr) {
//    var inputArr = [1,2,3,4,5,6,7,8,22,56,3,3,406,1370,11754,9,9,9];
    var outArr = [];
    for (var i = 0; i < inputArr.length; i++) {
        if ((inputArr[i]) % 2 === 0) {
            outArr.push((inputArr[i]));
        }
    }

    console.log("Дано: " + inputArr);
    console.log("Вывод: "+ outArr);
}
showEven([1,2,3,4,5,6,7,8,22,56,3,3,406,1370,11754,9,9,9]);

function showReverse(inReverse) {
    return (
        inReverse
            .toString()
            .split('')
            .reverse()
            .join('')
    )
}

console.log(showReverse(-123450));

function showPalindrome(palindrom) {
    var newArrWord = palindrom.toString().toLowerCase().replace(/\s+/g, '').split('').reverse().join('');
    palindrom = palindrom.toString().toLowerCase().replace(/\s+/g, '').split('').join('');
    console.log(palindrom);
    console.log(newArrWord);
    if (palindrom === newArrWord) {
        console.log("Полиндром: " + true);
    } else console.log("Полиндром: " + false);
}

showPalindrome("nurses run");

function showCombi(string) {
    combi = [];
    for (i=0;i<string.length;i++){
        for (n=i+1;n<string.length+1;n++){
            combi.push(string.slice(i, n));
        }
    }
    return combi;
}
console.log(showCombi("snow"));

//4
function alpabeticalOrder(string) {
    var output = string.toString().toLowerCase().split('').sort().join('');
    console.log(output);
}

alpabeticalOrder("webmaster");

//5
function firstCharToUpper(word) {
    var words = word.toString().toLowerCase().split(' ');
    var upperArr = words.map(function (eachWord) {
        return eachWord.charAt(0).toUpperCase() + eachWord.substr(1);
    });
    return upperArr.join(" ");
}
console.log(firstCharToUpper("mur kisa"));

//6
function showLongestWord(string) {
    var words = string.split(' ').sort(function (a, b) {
    return b.length - a.length;
    });
    return words[0];
}

console.log(showLongestWord("Web Development Tutorial"));

//7
function getVowels(string) {
    var vowel = 0;
    vowel = string.match(/[aeiou]/gi);//g - по всей строке i - пофиг на регистр
    console.log(vowel.length);
}
getVowels("The quick brown fox");

//8
function getPrime(number) {
    for(var i = 2; i < number; i++)
        if(number % i === 0) return false;
    return number > 1;
}

console.log(getPrime(29));

//9
function showType(input) {
    console.log(typeof input);
}
showType(true);

//10

function createMatrix(number) {
    var matrixArr = [];
    for (i=0;i<number; i++){
        for (x=0; x<number; x++){
            if (i === x){
                matrixArr.push(1);
            } else matrixArr.push(0);
        } console.log(matrixArr);
        matrixArr = [];
    }
}
createMatrix(3);

//11
function getSecondNumber(numberArr) {
    numberArr = numberArr.sort(function (a, b) {
        return a - b;
    });
    var outNumberArr = [];
    outNumberArr.push(numberArr[1]);
    outNumberArr.push(numberArr[numberArr.length-2]);
    console.log(numberArr);
    console.log(outNumberArr);
}
getSecondNumber([1,13,3,2,5,4,67,22]);

//12
function getPerfectNumber(num){
    var halfOfSum=0;
    var i=0;
    while( num / 2 >=i ){
        i++;
        if( num % i === 0 )
            halfOfSum = halfOfSum + i;
    }
    return num === halfOfSum;
}

console.log(getPerfectNumber(6));

//13
function getFactors(num) {
    var arr = [];
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            arr.push(i);
        }
    }
    console.log(arr);
}
getFactors(36);

//14
function showCoins(amount, coins) {
    if (amount === 0)    {
        return [];
    } else {
        if (amount >= coins[0]) {
            left = (amount - coins[0]);
            return [coins[0]].concat(showCoins(left,coins));
        }else {
            coins.shift();
            return showCoins(amount, coins);
        }
    }
}
console.log(showCoins(46, [25, 10, 5, 2,1]));

//15
function getExponent(base, exponent) {
    var output;
    output = Math.pow(base, exponent);
    console.log(output);
}
getExponent(5,2);

//16
function returnUniqueText(text){
    var getText = text;
    var uniqText = "";
    for (var i=0;i<getText.length;i++){
        if (uniqText.indexOf(getText.charAt(i))===-1){
            uniqText += getText[i];
        }
    }
    return uniqText;
}
console.log(returnUniqueText("hi myy name is pavel"));

//17
function getCount(str) {
    let freq = {};
    for(let i = 0; i < str.length; i++) {
        const currentLetter = str.charAt(i);
        freq[currentLetter] = freq[currentLetter] + 1 || 1;
    }
    return freq;
}
console.log(getCount("my name is pavel redwood"));

//18


//19
function showBiggerElement(arr, number) {
    var result = arr.filter(big => big > number);
    console.log(result);
}
showBiggerElement([5,11,50,3,4],5);

//20
function makeRandom(lenght) {
    var arr1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    output = "";
    for (i = 0; i < lenght; i++) {
        output += arr1.charAt(Math.random()*arr1.length);

    }
    return output;
}
console.log(makeRandom(8));


//21

//22
function getCount2(word, letter) {
    var count = 0;
    for (i=0;i<word.length;i++){
        if (word.charAt(i) === letter){
            count += 1;
        }
    }
    console.log("Word: "+word+" " + "=>" + " Search: "+letter);
    return count;
}
console.log(getCount2("redwood","o"));


//23
function showNoRepeat(string) {
    for (var i = 0; i < string.length; i++) {
        var char = string.charAt(i);
        if (string.indexOf(char) == i && string.indexOf(char, i + 1) == -1) { //Местоположение внутри строки, откуда начинать поиск.
            return char;
        }
    }
}
console.log(showNoRepeat("redwoodr"));

//24
function bubbleSort(arr) {
    var swapped;
    do {
        swapped = false;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                var x = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = x;
                swapped = true;
            }
        }
    }
    while (swapped) ;
    return arr;
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));


//25
function LongestWord(string) {
    var arr = string.sort(function (a, b) {
        return b.length - a.length;
    });
    return arr[0];
}
console.log(LongestWord(["Germany", "Russia", "Georgia", "United States of America"]));

//26

//27


//28
function showText(x) {
    console.log(x);
}
function callfunc(name) {
    name("Hello Kitty");
}

callfunc(showText);

//29
function fName() {}
console.log(fName.name);