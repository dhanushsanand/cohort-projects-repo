const user1 = {
    firstName: "Dhanush",
    gender: "Male"
}

//Array of Objects
const allUsers = [
    {
        firstName:"Dhanush",
        gender:"male"
    },
    {
        firstName:"Shivanand",
        gender:"male"
    },
    {
        firstName:"Padma",
        gender:"female"
    }    
]

// for(let i = 0;i<allUsers.length;i++){
//     if(allUsers[i].gender === "female"){
//         console.log(allUsers[i].firstName)
//     }
// }

function addNumbers(a, b, fnToCall){
    let result = a+b;
    fnToCall(result);
}

function displayResult(data){
    console.log("Result of the sum is "+data)
}
addNumbers(10, 20 , displayResult);


function calculator(a, b, fnToCall){
    fnToCall(a, b)
}

function add(a, b){
    console.log( a + b);
}

function subtract(a, b){
    console.log(a- b);
}

calculator( 10 , 2, add)

function greet(){
    console.log("Hello World")
}

// setTimeout(greet, 3000)
// setInterval(greet, 2000);

function getTime(){
    //const time = new Date();
    console.log(new Date().toTimeString().slice(0, 8))
}
setInterval(getTime, 1000);