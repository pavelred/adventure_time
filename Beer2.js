import novoePivo from './importBeer';

function Beer2(name) {
    Beer.call(this, name);
    this.age = 20;

}
Beer2.prototype = Object.create(novoePivo.prototype);
const jopa = new Beer2("Krinica");
console.log(new novoePivo("Pavel2"));
jopa.age = 200;
console.log(new Beer2("Pavel"));
console.log(jopa);
console.dir(jopa.getName());
