function decimalToBinary(){ //function which converts to decimal to binary
    let regex = /[\W+|_]/g; //regular expressions, determines whether a string contains non-alphanumeric character
    let decimalNumber = document.getElementById('decimal').value; //gets the number

    let stack = []; //create stack
    let result = ''; //display result

    while (decimalNumber > 0){ //while the number is greater than zero
      stack.push(decimalNumber % 2); //push the stack by it's remainder
      decimalNumber = Math.floor(decimalNumber / 2); //the decimalNumber value is the largest value returned from the decimalNumber / 2 equation
    }
    
    while (stack.top > 0){  //while the top of the stack is greater than zero
      result += stack.pop(); //result = result + the last element of an array
    }

    finalResult = stack.reverse(); //reverses the array
    printResult = document.getElementById('binary').value = finalResult.toString().replace(regex,""); //prints the stack by converting it to string and removing the comma separators
  }
