//todo реализовать инкапусляцию
function closure() {
    var name = 'pavel';
    function displayName() {
        console.log(name);
    }
    displayName();
}
closure();