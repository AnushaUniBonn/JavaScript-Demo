// JavaScript source code
/* Data Types, Operators(Arithmetic, String, Assignment, Comparison, Boolean, Ternary) and 
 * Conditional Statements in JavaScript,Loops & 
 * Functions (Functions - Named, Anonymous, Self Invoking, Constructors, Function Parameters and Return Statement), 
 * Browser Object Model & Document Object Model,
 Event Handling & Form Validation*/

/*Java Script code can be implemented using <script> element 
either inside body element in HTML page 
or completely outside <html> tag at the bottom of HTML page.
or attached as external file to HTML page inside <script> element*/


console.log("Hello World from Java Script Code in console");

document.write("Hello world from Java Script");

var general;

console.log(general);

general = 5;
console.log(typeof general);

general = "hello";
console.log(typeof general);

general = true;
console.log(typeof general);

general = [2, 4, 5, 3];
console.log(typeof general);
console.log(general.length);

var space = new Array("moon", "star", "sun");
console.log(typeof space);
console.log(space.length);


var num1 = 5;
var num2 = num1 + 5;
var num3 = num1 + "5";
console.log(num2);
console.log(num3);


var num4 = prompt("Enter first real number :");
console.log(typeof num4);
console.log(parseInt(num4) + 2);
//alert("This is an alert:")

var num5 = prompt("Enter first second number :");

alert("The sum of real number is :" + (parseFloat(num4) + parseFloat(num5)));
