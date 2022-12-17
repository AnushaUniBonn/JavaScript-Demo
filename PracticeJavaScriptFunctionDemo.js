// JavaScript source code
document.write("Welcome to Function Demo!!!!!!")
function addNum(a, b) {
    console.log("Named Funcion is called.......");
    return a + b;

}

var c = 5;
var d = 7;
console.log(addNum(c, d));
var e = addNum(4, 5);
console.log(e);

var add = function (a, b) {
    console.log("Anonymous Funcion is called.......");
    return a + b;
};
console.log(add(2, 3));
setTimeout(function () { console.log("Anonymous Function call in Set Timout Function after 5 seconds......."), 5000 });

var constFunc = new Function("g", "h", "console.log('Constructor Function is called.....');return g+h;");
var f = constFunc(45, 53);
console.log(f);


(function (i, j) {
    console.log("This is self invoking function.........");
    return i + j;
}
 (2, 6));


(function (i, j) {
    console.log("This is another self invoking function.........");
    return i + j;
})(2, 6);


var closureFunc = (function () {
    var counter = 0;
    return function () { return counter += 1; }
})();