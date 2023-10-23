//Question 1

function receivingFunction(argument) {
    if (typeof argument === "function") {
        argument();
    }

    else {
        console.log("Not a function")
    }
};

const notFunction = "";
const secondFunction = function callbackFunction () {
    console.log("I am a callback function")
};

receivingFunction(secondFunction);
receivingFunction(notFunction);

//Question 2

const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

// for (let i = 0; i < prizes.length; i++) {
//     console.log(`Prize ${i + 1}: ${prizes[i]}`);
// }

prizes.forEach(function(item, index) {
    console.log(`Price ${index + 1}: ${item}`);
})

//Question 3

let delayTime = 5000;

function waitTime() {
    console.log(`I waited ${delayTime / 1000} seconds before executing`)
}

setTimeout(waitTime, delayTime);


//Question 4

let startTime = 0;

function countUp() {

    startTime++;

    if (startTime === 4) {
        clearInterval(counter);
    }

    console.log(startTime);
};

console.log(0);
const counter = setInterval(countUp, 1500);