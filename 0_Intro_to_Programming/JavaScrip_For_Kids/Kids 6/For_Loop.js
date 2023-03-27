// for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
//     alert("I have counted " + sheepCounted + " sheep");
// }
// alert("Zzzzzz");


// var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];

// for (var i = 0; i< animals.length; i++) {
//     console.log("This zoo contains a " + animals[i] + ".");
// }


// var name = "Nick";

// for (var i = 0;i < name.length; i++) {
//     console.log("My name contains a " + name[i] + ".");
// }


// for (var x = 2; x < 10000; x = x * 2) { 
//     console.log(x);
// }


// var i = 1;

// for (var x = 0; x < 10000; i++) {
// x = (3**i);
//    console.log(x)
// }


// var i = 0;
// var x = 0;

// while (x < 10000) {
//     x = (3**i);
//     i++;
//     console.log(x);
// }

// var animal = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

// for (var i = 0; i < animal.length; i++){
//     animal[i] = "Awsome " + animal[i];
//     console.log(animal[i]);
// }


// var alphabet = "abcdefjhijklmnopqrstuvwxyz";
// var randomString = "";

// while (randomString.length < 6) {
//     randomString = randomString + alphabet[Math.floor(Math.random()* alphabet.length)];
// }
// console.log(randomString);



var input = "javascript is awesome";
var output = "";

for (i = 0; i < input.length; i++){
    if (input[i] === "a") {
        output = output + "4";
    } else if (input[i] === "e") {
        output= output + "3";
        } else if (input[i] === "i") {
            output = output + "1";
        } else if (input[i] === "o") {
            output = output + "0";
        } else {
            output = output + input[i];
        }
    }
    alert(output);