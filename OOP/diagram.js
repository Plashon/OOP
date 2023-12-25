let person = {
    fristName:"PlaShon",
    lastName: "Four",
    age:"20",
    isStudent:false,
    sayHello: function(){
        console.log("Hello");
    }
};

console.log(person.fristName);
console.log(person.age)

person.sayHello();

class Person {
    constructor(fristName,lastName, age,isStudent){
        this.fristName = fristName;
        this.lastName = lastName;
        this.age = age;
        this.isStudent = isStudent
    }

    sayHello(){
        
    }
}