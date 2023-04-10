function checkPasswords() {
  // Get the values of the password fields
  var password1 = document.getElementById("password1").value;
  var password2 = document.getElementById("password2").value;

  // Initialize an empty error message
  var errorMessage = "";

  // Use a switch statement to check for errors
  switch (true) {
    // If the length of password1 is less than 8 characters, set the error message accordingly
    case (password1.length < 8):
      errorMessage = "The length of the first password is less than 8 characters!";
      break;
    // If the length of password2 is less than 8 characters, set the error message accordingly
    case (password2.length < 8):
      errorMessage = "The length of the second password is less than 8 characters!";
      break;
    // If password1 and password2 don't match, set the error message accordingly
    case (password1 !== password2):
      errorMessage = "The two passwords do not match!";
      break;
    // If no errors were found, set the error message to a success message
    default:
      errorMessage = "Everything is good!";
      break;
  }

  // Display the error message in an alert box
  alert(errorMessage);
}

function changeParagraphStyle() {
  // Get references to the form inputs and the paragraph tag
  var borderRed = document.getElementById("border-red").value;
  var borderGreen = document.getElementById("border-green").value;
  var borderBlue = document.getElementById("border-blue").value;
  var borderWidth = document.getElementById("border-width").value;
  var bgRed = document.getElementById("bg-red").value;
  var bgGreen = document.getElementById("bg-green").value;
  var bgBlue = document.getElementById("bg-blue").value;
  var paragraph = document.getElementById("paragraph");

  // Set the paragraph style properties using the input values
  paragraph.style.borderColor = `rgb(${borderRed},${borderGreen},${borderBlue})`;
  paragraph.style.borderWidth = `${borderWidth}px`;
  paragraph.style.backgroundColor = `rgb(${bgRed},${bgGreen},${bgBlue})`;
}
