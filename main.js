function validateForm(){
 var validFirstname = false;
 var letters = /^[A-Za-z]+$/;
 var validLastname = false;
 var errorMessages ="";
 var validEmail = false;
 var validPhone = false;
 var numbers = /^[0-9]+$/;
 var validUsername = false;
 var validPassword = false;
 var validAddress = false;
 var validCity = false;
 var validState = false;
 var validCountry = false;
 var validZipcode = false;


  var Firstname = document.getElementById("firstname").value;
  
  if (Firstname === "null" ||
      Firstname === "" ||
      !Firstname.match(letters) ||
      Firstname.length > 20) 
  {
    errorMessages = errorMessages + "<p> First Name is required, only letters are allowed and it cannot be greater than 20 characters.</p>";
  }
  else {
    validFirstname = true;
  } 
  
  var Lastname = document.getElementById("lastname").value;
  
  if (Lastname === "null" ||
      Lastname === "" || 
      !Lastname.match(letters) ||
      Lastname.length > 50) 
  {
    errorMessages = errorMessages + "<p> Last Name is required, only letters are allowed and cannot be greater than 50 characters. </p>";
  }
  else {
    validLastname = true;
  } 
 
 var Email = document.getElementById("email").value;
var atpos = Email.indexOf("@");
var dotpos = Email.lastIndexOf(".");
if (Email === null || Email ==="" || atpos< 1 || dotpos<atpos+2 || dotpos+2>=Email.length)
{  
    errorMessages = errorMessages +  "<p> Email is not valid. </p>";
  }
  else {
    validEmail = true;
  } 
 
 var Phone = document.getElementById("phone").value;
  if (Phone === "null" ||
      Phone === "" ||
      !Phone.match(numbers) ||
      Phone.length > 15) {
    
    errorMessages = errorMessages +  "<p> Phone number is not valid.</p>";
  
  }
  else {
    validPhone = true;
  } 
 
  var Username = document.getElementById("username").value;
  if (Username === "null" ||
      Username === "" ||
      Username.length > 12) {
    
    errorMessages = errorMessages +  "<p> Username is required and cannot be greater than 12 characters.</p>";
  
  }
  else {
    validUsername = true;
  } 
 
   var Password = document.getElementById("password").value;
  if (Password === "null" ||
      Password === "" ||
      Password.length > 7) {
    
    errorMessages = errorMessages +  "<p> Password is required and cannot be greater than 7 characters.</p>";
  
  }
  else {
    validPassword = true;
  } 
 
  var Address = document.getElementById("address").value;
  if (Address === "null" ||
      Address === "")
  {
    errorMessages = errorMessages +  "<p> Address is required.</p>";
  }
  else {
    validAddress = true;
  } 
 
 
 var City = document.getElementById("city").value;
  if (City === "null" ||
      City === "") {
    
    errorMessages = errorMessages +  "<p> City is required.</p>";
  
  }
  else {
    validCity = true;
  } 
 
 var State = document.getElementById("state").value;
  if (State === "null" ||
      State === "") {
    
    errorMessages = errorMessages +  "<p> State is required.</p>";
  
  }
  else {
    validState = true;
  } 
 
 var Country = document.getElementById("country").value;
  if (Country === "null" ||
      Country === "") {
    
    errorMessages = errorMessages +  "<p> Country is required.</p>";
  
  }
  else {
    validCountry = true;
  } 
  
 /* var Zipcode = document.getElementById("zipcode").value;
  var Country = document.getElementById("country").value;
  if ( Country === "USA" 
       Zipcode === "null" 
       Zipcode === "" 
       Zipcode.length > 5) 
  
  {
    
    errorMessages = errorMessages +  "<p> Zipcode is required if country is USA and it cannot be greater than 5 characters .</p>";
  
  }
  else {
    validZipcode = true;
  }  */
 
  document.getElementById("errorMessages").innerHTML = errorMessages;
 return (validFirstname && validLastname && validEmail && validPhone && validUsername && validPassword && validAddress && validCity && validState && validCountry && validZipcode);

}
