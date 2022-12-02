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
      Firstname === "") 
  {
    errorMessages += "<p> First Name is required. It must be only letters and less than 20 characters. </p>";
  }
  else {
    validFirstname = true;
  } 
  
  var Lastname = document.getElementById("lastname").value;
  
  if (Lastname === "null" ||
      Lastname === "") 
  {
    errorMessages += "<p> Last Name is required. It must be only letters and less than 50 characters. </p>";
  }
  else {
    validLastname = true;
  } 
  
  


 var Email = document.getElementById("email").value;
  if (Email === "null" ||
      Email === "") {
    
    errorMessages = errorMessages +  "<p>Email is required.</p>";
  
  }
  else {
    validEmail = true;
  } 
  
  
 var Phone = document.getElementById("phone").value;
  if (Phone === "null" ||
      Phone === "") {
    
    errorMessages = errorMessages +  "<p> Phone number is not valid.</p>";
  
  }
  else {
    validPhone = true;
  } 
  
  
   var Username = document.getElementById("username").value;
  if (Username === "null" ||
      Username === "") {
    
    errorMessages = errorMessages +  "<p> Username is not valid.</p>";
  
  }
  else {
    validUsername = true;
  } 
  
  
   var Password = document.getElementById("password").value;
  if (Password === "null" ||
      Password === "") {
    
    errorMessages = errorMessages +  "<p> Password is not valid.</p>";
  
  }
  else {
    validPassword = true;
  } 
  
  var Address = document.getElementById("address").value;
  if (Address === "null" ||
      Address === "") {
    
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
  
  var Zipcode = document.getElementById("zipcode").value;
  if (Zipcode === "null" ||
      Zipcode === "") {
    
    errorMessages = errorMessages +  "<p> Zipcode is required.</p>";
  
  }
  else {
    validZipcode = true;
  } 

  
  document.getElementById("errorMessages").innerHTML = errorMessages;
  return (validFirstname && validLastname && validEmail && validPhone && validUsername && validPassword && validAddress && validCity && validState && validCountry && validZipcode);
}
