// JavaScript source code
document.write("Welcome to Objects Demo!!!!!!");

function createPerson() {

    var person = new Object();
    person.name = "Geeta";
    person.designation = "Trainer";
    person.phno = 345267567;
    return person;

}

var cp = createPerson();
console.log(cp); 

function createPerson2() {

    var person = {};
    person.name = "Mala";
    person.designation = "Student";
    person.phno = 347867567;
    return person;

}
var cp2 = createPerson2();
console.log(cp2); 

function createPerson3() {

    var person = { name: "Saya", designation: 'admin', phno: 3452617876 };
    return person;
}

var cp3 = createPerson3();
console.log(cp3); 


function createPerson4() {

    var person = {};
    person['name'] = "Hari";
    person['designation'] = "student";
    person['phno'] = 345678765;
    return person;
}

var cp4 = createPerson4();
console.log(cp4); 

function createPerson5() {
    this.name = "Akash";
    this.designation = "Teacher";
    this.phno = 3456278956;
}
var cp5 = new createPerson5();
console.log("Your name is " + cp5.name + "\nYour designation is " + cp5.designation + "\nYour Phone Number is " + cp5.phno);


var Animal = {
    type: "Invertebrates",
    displayType:function() {
        console.log("The type of animal is "+this.type);
    }
    }
var animal1 = Object.create(Animal);
console.log(animal1.displayType());
var fish = Object.create(Animal);
fish.type = "Sea Animals";
console.log(fish.displayType());

var createPerson6 = {
    name: "ABC",
    subjects: ["Maths", "Physics", "Chemistry"],
    teaches: ["F", "S"],
    age:60
}
var properties="";
for (i in createPerson6) {
    properties += i+" : ";
}
console.log("Before Deletion :"+properties);

delete createPerson6.age;

properties = "";
for (i in createPerson6) {
    properties += i + " : ";
}

console.log("After Deletion :" + properties);
