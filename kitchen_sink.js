let myName = "William Taylor Sockwell";
const states = 50;
let sum = 5 + 4;
//This code is used to display my name, the number of states, and the sum of 4 and 5
function sayHello() {
    alert("Hello World!");
}

//sayHello();

let person = {
    name:"John",
    age:17
};

function checkAge(name,age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    } else {
        alert("Welcome " + name + "!");
    }
};


//checkAge(person);

let favVeg=["spinnach","chives","zuchini"];

for (let index = 0; index < favVeg.length; index++) {
    console.log(favVeg[index])
    
}

let pet = {
    name:"Serenity",
    breed:"German Shepard"
};
console.log(pet.name, pet.breed)

let people = [
    person1={
        name:"Jacob",
        age:32
    },
    person2={
        name:"Abigail",
        age:16
    },
    person3={
        name:"Luke",
        age:18
    },
    person4={
        name:"Austin",
        age:50
    },
    person5={
        name:"Sarah",
        age:20
    }
];

//for (let index = 0; index < people.length; index++) {
//    checkAge(people[index].name,people[index].age)
//}

function getLength(){
    
};
console.log(getLength("Hello World!"))
if (getLength % 2 == 0){
    console.log("The world is nice and even!");
} else if (getLength % 2 ==1) {
    console.log("The world is an odd place!");
} else {
    console.log("error");
};