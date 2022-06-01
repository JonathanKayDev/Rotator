// CONTROLLER FUNCTION(S)
// get user string from the page
function getString() {
    let userString = document.getElementById("userString").value;
    document.getElementById("alert").classList.add("invisible");

    if (validateString(userString)) {
        let inputString = simplifyString(userString);
        let outputString = reverseString(inputString);

        if (checkPalindrome(inputString, outputString)) {
            displayString(`YES! '${inputString}' is a PALINDROME!`);
        }
        else
        {
            displayString(`NO! '${inputString}' is NOT a PALINDROME!`);
        }
    }

}



// LOGIC FUNCTION(S)
function validateString(inputString) {
    let output = true;

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
    simpleString = simpleString.replace(/[^a-zA-Z]/g,"");
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
    if (inputString == reverseString) {
        return true;
    }
    else
    {
        return false;
    }
}


// VIEW FUNCTION(S)
// Display the output string to the user
function displayString(inputString) {
    // write message to page
    document.getElementById("msg").innerHTML = inputString;

    // show the alert box
    document.getElementById("alert").classList.remove("invisible");
}