function Beer (name) {
    this.name = name;
    this.age = '';
}
Beer.prototype.getName = function () {
    return "superpivo" + this.name;
};

export default Beer;