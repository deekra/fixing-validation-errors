function validateForm(){
 var errorMessages ="";
 var validState = false;
 var validCountry = false;
 var validZipcode = false;

 
 var State = document.getElementById("state").value;
  
  if (State === "null" ||
      State === "" ) 
  {
    errorMessages = errorMessages + "<p> State is required.</p>";
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
  var country = document.getElementById("country").value;
   if (Zipcode === "null"
       Zipcode === ""
       country === "USA" 
       Zipcode.length > 5) 

  {
    
    errorMessages = errorMessages +  "<p> Zipcode is required if the country is USA and it cannot be greater than 5 characters.</p>";
  
  }
  else {
    validZipcode = true;
  }
  
  document.getElementById("errorMessages").innerHTML = errorMessages;
 return (validCountry && validCountry && validZipcode);

}
 

  

