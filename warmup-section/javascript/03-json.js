let user = {
    name: "Dhanush",
    age: 27,
    gender:"male"
}

let jsonString = JSON.stringify(user)
console.log(jsonString);
console.log(JSON.parse(jsonString)["name"]);

console.log(Object.keys(user));
console.log(Object.values(user))
console.log(Object.entries(user).at(0).at(1));