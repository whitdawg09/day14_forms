function greet() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const age = document.getElementById('age').value;

    const message = `Welcome, ${fname} ${lname}! You are ${age} years old.`;
    document.getElementById('greet').innerHTML = message;
}

function trivia1() {
    if (document.getElementById('honey').checked) {
        document.getElementById("trivia1-answer").innerHTML = "Correct! Honey never goes bad.";
    } else {
        document.getElementById("trivia1-answer").innerHTML = "Incorrect!";
    }
}

function checkLie() {
    if (document.getElementById('lie').checked) {
        document.getElementById("truth").innerHTML = "Correct! I have more than 2 siblings.";
    } else {
        document.getElementById("truth").innerHTML = "Incorrect!";
    }
}
