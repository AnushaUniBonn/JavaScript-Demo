// JavaScript source code
function validateForm(){

    var uname = document.forms["myForm"]["item3"].value;
    var age = document.forms["myForm"]["item4"].value;

    if (uname == null) {
        alert("Please enter some value in Item Three");
        return false;
    }
    if (!(isNaN(uname))) {
        alert("Please enter some text in Item Three");
        return false;
    }
    if (isNaN(age)) {
        alert("Please enter some number in Item Three");
        return false;
    }
}