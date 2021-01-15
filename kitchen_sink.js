let myName = "William Taylor Sockwell";
const states = 50;
let sum = 5+4;
//This code is used to display my name, the number of states, and the sum of 4 and 5
function sayHello() {
    alert("Hello World!");
}

//sayHello();

let person1={
    name: "Charles",
    age: 21
};
let person2={
    name: "Abby",
    age: 27
};
let person3={
    name: "James",
    age: 18
};
let person4={
    name: "Jhon",
    age: 17
};

function checkAge() {   
    if(person1.age<21){
        alert("Sorry "+person1.name+", you aren't old enough to view this page!");
    } else {
        alert("Welcome "+person1.name+"!");
    }
};

checkAge(person1);