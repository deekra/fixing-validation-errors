function validateForm(){
 var errorMessages ="";
 var validEmail = false;
 var validAddress = false;
 var validState = false;
 var validCountry = false;
 var validZipcode = false;

  
var Email = document.getElementById("email").value;
  var atpos = Email.indexOf("@");
  var dotpos = Email.lastIndexOf(".");
  if ( Email === "null" ||
      Email === "" ||
      atpos< 1 ||
      dotpos<atpos+2 ||
      dotpos+2>=Email.length )
  {
    
    errorMessages = errorMessages +  "<p> Email is not valid. </p>";
  
  }
  else {
    validEmail = true;
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
      Country === "")
  { 
    errorMessages = errorMessages +  "<p> Country is required.</p>";
  }
  else {
    validCountry = true;
  } 
  
  var Zipcode = document.getElementById("zipcode").value;
   if (Zipcode === "null" &&
       Zipcode === "" &&
       country = "USA" && 
       Zipcode.length > 5) 

  {
    
    errorMessages = errorMessages +  "<p> Zipcode is required if the country is USA and it cannot be greater than 5 characters.</p>";
  
  }
  else {
    validZipcode = true;
  }

  document.getElementById("errorMessages").innerHTML = errorMessages;
  return (validEmail && validAddress && validState && validCountry && validZipcode);

} 

