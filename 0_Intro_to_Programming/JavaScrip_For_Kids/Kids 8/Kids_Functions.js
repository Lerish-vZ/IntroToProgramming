//Creating a simple function 
// var ourFirstFunction = function () { 
//     alert("Hello world!");
// }
// ourFirstFunction();


//Passing arguments into functions 
// var sayHelloTo = function(name) {
//     alert("Hello " + name + "!");
// }
// var name = prompt("What is your name?");
// sayHelloTo(name);


//Printing cat faces 
// var drawCats = function (howManyTimes) {
//     for (var i = 0; i < howManyTimes; i++){
//         console.log(i + "=^.^=");
//     }
// };

// drawCats(100);



//Having multiple arguments in a function
// var printMultipleTimes = function (howManyTimes, whatToDraw) {
//     for (var i = 0; i < howManyTimes; i++) {
//         console.log(i + " " + whatToDraw);
//     }
// };

// var whatToDraw = prompt("What would you like to draw?");
// var howManyTimes = prompt("How many times do you want it drawn?");
// printMultipleTimes(howManyTimes, whatToDraw);


//DOing arithmetic with functions
// var add = function (num1,num2){
//     alert(num1 + num2);
// }

// var multiply = function(num1, num2){
//     alert(num1*num2);
// }

// multiply(36325,add(9824 ,777));


//are these arrays the same 
var areArraysSame = function(array1, array2){
    for (var i = 0; i < array1.length; i++);
    if (array1.length !== array2.length) {
     false;
     return;   
    } else if (array1[i] === array2[i]) {
        true; 
        return;
    } 
}
areArraysSame([1, 2, 3], [1, 2, 3]);