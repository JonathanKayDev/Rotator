// CONTROLLER FUNCTION(S)
// get user string from the page
function getString() {
    let userString = document.getElementById("userString").value;
    document.getElementById("alert").classList.add("invisible");

    // check for palindrome, if valid input
    if (validateString(userString)) {
        let inputString = simplifyString(userString);
        let outputString = reverseString(inputString);

        // check for palindrom
        let returnObj = checkPalindrome(inputString, outputString);

        // display output message 
        displayString(returnObj);
    }
}



// LOGIC FUNCTION(S)
function validateString(inputString) {
    let output = true;

    // strip out space a non-letters
    inputString = simplifyString(inputString); 

    // check if string is empty or has only white spaces
    if (inputString.length === 0 || !inputString.trim()) {
        alert("Please enter a string to check!")
        output = false;
    }

    return output;
}


// remove whitespace, upper case, and special characters
function simplifyString(inputString){
    let simpleString = "";

    simpleString = inputString.toLowerCase();
    simpleString = simpleString.replace(/[^a-z0-9]/g,"");
    simpleString = simpleString.replaceAll(/\s+/g,"");

    return simpleString;
}

// reverse string
function reverseString(inputString) {
    let revString = [];

    // reverse the string using a for loop
    for ( let i = inputString.length -1; i >=0; i--) {
        revString += inputString[i];
    }

    return revString;
}

// check for palindrome
function checkPalindrome(inputString, reverseString) {
    let returnObj = {};

    if (inputString == reverseString) {
        returnObj.msg = `YES! Palindrome found!`;
    }
    else
    {
        returnObj.msg = `Sorry! No palindrome found.`;
    }

    returnObj.reversed = reverseString;

    return returnObj;
}


// VIEW FUNCTION(S)
// Display the output string to the user
function displayString(returnObj) {
    // write message to page
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;

    // show the alert box
    document.getElementById("alert").classList.remove("invisible");
}