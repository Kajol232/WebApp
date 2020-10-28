var score = 100;
var type = "Student";
var profile = {
    name: "John",
    surname: "Doe"
};
var age = 20;

console.log(profile.name, "is a", age, "year old", type,
    "with a total mark of", score, ".");

age += score;
console.log(age);
console.log(`${score} is `)