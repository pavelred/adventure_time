var nowDate = new Date();
var datetime = nowDate.getDate() + "/" + (nowDate.getMonth()+1)  + "/" + nowDate.getFullYear();
console.log(datetime);

var todayDate = new Date();
var dateTime2 = todayDate.getDate();
console.log("День: " + dateTime2);
var month = todayDate.getMonth();
console.log("Месяц: " + (month + 1));
var year = todayDate.getFullYear();
console.log("Год: " + todayDate.getFullYear());

//1
var date = new Date(2012, 1, 20, 3, 12);
console.log(date);

//2
function showDay(date) {
    var days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    return days[date.getDay()];
}
var date = new Date();
console.log(showDay(date));

//3
function getLocalDay(date) {
    var day = date.getDay();
    if (day == 0){
        day = day - 1;
    }
return day;
}
console.log(getLocalDay(new Date(2019, 6, 15)));

//4

//5
function getLastDayOfMonth(year, month) {
    var LastDay = new Date(year, month, 0);
    console.log(LastDay.getDate());
}
getLastDayOfMonth(2019, 7);


//6
function getSecondsToday() {
    var today = new Date();
    console.log(today);
    var Seconds = today.getHours() * 3600
    + today.getMinutes() * 60
    + today.getSeconds();
    console.log(Seconds);
}
getSecondsToday();

//7
//86400 - секунд в сутках
function getSecondsToTomorrow() {
    var today = new Date();
    console.log(today);
    var Seconds = today.getHours() * 3600
        + today.getMinutes() * 60
        + today.getSeconds();
    console.log(Seconds);
    var DaySeconds = 86400;
    var result = DaySeconds - Seconds;
    console.log(result);
}
getSecondsToTomorrow();

//8
function formatDate(date) {
    return new Date(date).toLocaleString('ru', {
        year: '2-digit',
        day:   '2-digit',
        month: '2-digit'
    });
}
console.log(formatDate(new Date(2014,0,30)));

//9
function formatDate2(date) {
    var nestle = new Date() - date;
    if (nestle < 1000) {
        console.log("только что");
    } else if (nestle < 1000 * 60){
        console.log((nestle / 1000) + " сек. назад");
    } else if (nestle < ((1000 * 60) * 60)){
        console.log(nestle / (1000 * 60) + " мин. назад");
    } else {
        console.log(new Date (date - 1));
    }
}
formatDate2(new Date(new Date - 1));
formatDate2(new Date(new Date - 30 * 1000));
formatDate2(new Date(new Date - 5 * 60 * 1000));
formatDate2(new Date(new Date - 86400 * 1000));