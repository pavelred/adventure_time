//функция конструктора, потому что вызывается через New

let idCounter = 1;

function Person (name, age) {
    this.name = name || "Anon";
    this.age = age || "secret";
    this.id = idCounter++;
}

var pavel = new Person("Pavel", 20);
console.log(pavel);
var nick = new Person("Nikita", );
console.log(nick);
var ded = new Person("",86);
console.log(ded);

function Beer (name) {
    this.name = name;
    this.age = '';
}
Beer.prototype.getName = function () {
    return "superpivo" + this.name;
};


function Beer2(name) {
    Beer.call(this, name);
    this.age = 20;

}
Beer2.prototype = Object.create(Beer.prototype);
const jopa = new Beer2("Krinica");
console.log(new Beer("Pavel2"));
jopa.age = 200;
console.log(new Beer2("Pavel"));
console.log(jopa);
console.dir(jopa.getName());














