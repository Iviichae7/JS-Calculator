// A function that takes one paramater decicion that is being handled on the buttons as onclick action
function math(decision) 
{
    // Saving the 2 input values as variables
    var userNumber1 = document.getElementById('number1').value;
    var userNumber2 = document.getElementById('number2').value;

    // Check if user has left any field blank
    if (userNumber1 === "" || userNumber2 === "") 
    {
        // Output the message if they did leave the fields blank
        document.getElementById('total').innerHTML = "Please enter valid numbers!";
        return;
    }
    // Converting the inputs into floats
    userNumber1 = parseFloat(userNumber1);
    userNumber2 = parseFloat(userNumber2);

    // Need a variable for the total of the calculation
    var total;

    // Need to display the output string based on the decision
    var output;

    // Using a switch statement to decide which operation the user choose
    switch (decision) 
    {
        case "+":
            total = userNumber1 + userNumber2;
            output = "The sum of " + userNumber1 + " + " + userNumber2 + " is ";
            break;
        case "-":
            total = userNumber1 - userNumber2;
            output = "The difference of " + userNumber1 + " - " + userNumber2 + " is ";
            break;
        case "*":
            total = userNumber1 * userNumber2;
            output = "The multiplication of " + userNumber1 + " * " + userNumber2 + " is ";
            break;
        case "/":
            // Checking if the user is trying to divide by 0, if not then display the calculation
            if (userNumber2 != 0) 
            {
                total = userNumber1 / userNumber2;
                output = "The division of " + userNumber1 + " / " + userNumber2 + " is "; 
            } else {
                // Otherwise display not allowed
                document.getElementById('total').innerHTML = "<span class='divide'>You can't divide by zero!</span>";
                return;
            }
            break;
    }
    
    // The output of the user's decisions!
    document.getElementById('total').innerHTML = output + "<span>" + total + "</span>";
}
