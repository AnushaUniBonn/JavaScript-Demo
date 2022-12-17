// JavaScript source code

document.write("Welcome to Browser Object Model - BOM Demo!!!!!!");

/*Window Object - Location Object, History Object, DOcument Object, Navigator Object, Screen Object
 * document object - forms, images, links
 */

//window.open();
//window.close();//closes current window

function windowsOp() { 
var newWin = window.open("https://www.google.com", "New Window", height = 100, width = 200);
newWin.moveTo(200, 150);
    newWin.close();
}
windowsOp();

console.log("Screen Width:", +screen.width + "\nScreen Height:" + screen.height +
    "\nColor Depth :" + screen.colorDepth +
    "\nWindow Width:" + window.innerWidth + "\nWindow Height" + window.innerHeight);


console.log("\n\nNavigator AppName:", +navigator.appName + "\nNavigator App Code Name :" + navigator.appCodeName+
    "\nNavigator Platform :" + navigator.platform +
    "\nNavigator Cookie Enabled:" + navigator.cookieEnabled + "\nNavigator Product : " + navigator.product);

console.log("\n\nURL of current page:", +window.location.href + "\nDomain Name of Web Host :" + window.location.hostname +
    "\nPath and FileName of current page :" + window.location.pathname +
    "\nWeb Protocol: " + window.location.protocol + "\nLoading New Document : " + window.location.assign);

//window.location.assign("https://www.google.com");

//history back and forward functions same as browser back and forward button
//history.back();
//history.forward();

//Document Object Model - DOM

//button has text, style and events associated to it

/* getElementByID()
 * getElementByClassName()
 * getElementByTagName()*/

console.log(document.getElementById("item1"));

console.log(document.getElementsByClassName("error"));

console.log(document.getElementsByTagName("input"));


document.getElementById("abc").innerHTML = "This is from Inner HTML";

document.getElementById("abc").setAttribute("style", "color:red");

/* Event Handling - Mouse Events, Touch Events, Keyboard Events, Form Events, Window Events
 Event Listeners - Static and Dynamic  */


document.getElementById("sb").addEventListener("click", paraClicked);

function paraClicked() {
    document.getElementById("sb").setAttribute("style", "background-color:green");
}

function paraMouseOver() {
    document.getElementById("abc").setAttribute("style", "color:yellow");
}





