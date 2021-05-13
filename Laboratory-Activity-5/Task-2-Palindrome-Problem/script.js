function palindrome(){ //function which checks if a text is a palindrome or not
    var regex = /[\W+|_]/g; //regular expressions, determines whether a string contains non-alphanumeric character and an underscore
    var str = document.getElementById('textToReverse').value; //gets the text that is entered by the user
    var string = str.toLowerCase().replace(regex,""); //converts the string to a lowercase and replaces the regular expressions to blank
    var revString = string.split("").reverse().join(""); //breaks the original string to array of substrings, reverses the substrings, and joins the array of substrings to a single string

    if (str === ''){ //alerts that there is no text entered
        alert("No text entered. Try again.");
    }
    else {
        if (string != revString){ //if string is equal to reversed substring, return false
            alert("The entered text is not a palindrome.")
        }
        else if (string == revString){ //return true
            alert("The entered text is a palindrome.");
        }
    }
}

document.addEventListener('keydown',(event) => { //to load the function after pressing Enter key
    if (event.key === 'Enter'){
        palindrome();
    }
})