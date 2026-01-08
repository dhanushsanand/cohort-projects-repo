let firstName = "Dhanush Shivanand";
let names = firstName.split(" ");
console.log(names);
console.log("The index of the second name is:" + firstName.indexOf("Shivanand"))

function splitString(str, startIndex, endIndex){
    let newString = "";
    for( let i = startIndex; i< endIndex;i++){
        newString += str[i];
    }
    return newString;
}

console.log(splitString("Dhanush", 2, 5));

const myname = "Dhanush"
console.log(myname.split("h"));


console.log(parseInt("3.89"));

const firstArray = [1,2,3]
const secondArray = [4, 5, 6]

for(let i = 0; i<secondArray.length;i++){
    firstArray.push(secondArray[i]);
}

console.log(firstArray);

firstArray.forEach( i => console.log(i));


class Animal{
    constructor(animal, speaks, legs){
        this.animal = animal;
        this.speaks = speaks;
        this.legs = legs;
    }

    static welcome(){
        console.log("Welcome to the Animal class");
    }

    describe() {
        console.log(`The animal is ${this.animal} and it ${this.speaks} and it has ${this.legs}`);
    }
}

Animal.welcome();

let dog = new Animal("Dog", "barks", "4");
dog.describe();