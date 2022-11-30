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
 
 function validateFirstname()
{
  var Firstname = document.getElementById("Firstname").value;
  console.log(validFirstname);
  if (contactUs.Firstname.value==="null"|| 
      contactUs.Firstname.value==="" ||
      contactUs.Firstname.value.match(letters) ||
      contactUs.Firstname.value.length > 20 ||  
      contactUs.Firstname.value.length < 0)
  {
   alert( "The First Name is required, only letters are accepted and it cannot be greater than 20 characters." )
    errorMessages += "<p>The First Name is required, only letters are accepted and it cannot be greater than 20 characters</p>";
    return false;
  }
  else
  {
   validFirstName = true;
  }
}
 
 function validateLastname()
{
  var validLastname = document.getElementById("Lastname").value;
    console.log(validLastname);
     if (contactUs.Lastname.value==="null" ||
      contactUs.Lastname.value==="" ||
      contactUs.Lastname.value.match(letters) || 
      contactUs.Lastname.value.length > 50)
  {
   sfm_show_error_msg ("The Last Name is required, only letters are accepted and it cannot be greater than 50 characters.")
    errorMessages += "<p>The Last Name is required, only letters are accepted and it cannot be greater than 50 characters</p>";
    return false;
  }
  else
  {
   validLastName = true;
  }
}
 
 function validateEmail()
 console.log(validEmail);
{
   var validEmail = document.getElementById("Email").value;
  var atpos = contactUs.Email.indexOf("@");
  var dotpos = contactUs.Email.lastIndexOf(".");
  var validEmail = document.getElementById("Email").value;
  if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=contactUs.Email.length)
  {
    errorMessages += "<p>Invalid email</p>";
    return false;
  }
  else
  {
   validEmail = true;
  }
}
  
  function validatePhone()
{
  var validPhone = document.getElementById("Phone").value;
  console.log(validPhone);
   if (contactUs.Phone.value==="null"|| 
      contactUs.Phone.value==="" ||
      contactUs.Phone.value.match(numbers) ||
      contactUs.Phone.value.length > 15 ||  
      contactUs.Phone.value.length < 0)
  {
    errorMessages = "<p>Invalid phone number </p>";
    return false;
  }
  else
  {
   validPhone = true;
  }
}

 function validateUsername()
{
   var validUsername = document.getElementById("Username").value;
   console.log(validUsername);
   if (contactUs.Username.value==="null"|| 
      contactUs.Username.value==="" ||
      contactUs.Username.value.match(numbers) ||
      contactUs.Username.value.length > 12 ||  
      contactUs.Username.value.length < 0)
  {
    errorMessages += "<p>The Username is required and cannot be greater than 12 characters</p>";
    return false;
  }
  else
  {
   validUsername = true;
  }
}
  
 function validatePassword()
{
   var validPassword = document.getElementById("Password").value;
   console.log(validPassword);
   if (contactUs.Password.value==="null"|| 
      contactUs.Password.value==="" ||
      contactUs.Password.value.match(numbers) ||
      contactUs.Password.value.length > 7 ||  
      contactUs.Password.value.length < 0)
  {
    errorMessages += "<p>The Password is required and cannot be greater than 7 characters</p>";
    return false;
  }
  else
  {
   validPassword = true;
  }
}

 function validateAddress()
{
   var validAddress = document.getElementById("Address").value;
    console.log(validAddress);
   if (contactUs.Address.value==="null"|| 
      contactUs.Address.value==="" || 
      contactUs.Address.value.length < 0)
  {
   errorMessages += "<p>The Address is required </p>";
    return false;
  }
  else
  {
   validAddress = true;
  }
}

function validateCity()
{
   var validCity = document.getElementById("City").value;
     console.log(validCity);
   if (contactUs.City.value==="null"|| 
      contactUs.City.value==="" || 
      contactUs.City.value.length < 0)
  {
    errorMessages += "<p>The City is required </p>";
    return false;
  }
  else
  {
   validCity = true;
  }
}
  

function validateState()
{
   var validState = document.getElementById("State").value;
   console.log(validState);
  if (contactUs.State.value==="null"|| 
      contactUs.State.value==="" || 
      contactUs.State.value.length < 0)
  {
   errorMessages += "<p>The State is required </p>";
    return false;
  }
  else
  {
   validState = true;
  }
}
  
function validateCountry()
{
   var validCountry = document.getElementById("Country").value;
   console.log(validCountry);
   if (contactUs.Country.value==="null"|| 
      contactUs.Country.value.length < 0)
  {
    errorMessages += "<p>The Country is required </p>";
    return false;
  }
  else
  {
   validAddress = true;
}
  
function validateZipcode()
{
   var validZipcode = document.getElementById("Zipcode").value;
   console.log(validZipcode);
  
   if contactUs.Country.value==="USA"||
      contactUs.Address.value.length > 0||
      contactUs.Address.value.length < 5)
      {
    errorMessages += "<p>The Zipcode is required if your country is USA and it cannot be greater than 5 digits </p>";
    return false;
  }
  else
  {
   validZipcode = true;
  }
}
  
 document.getElementById("errorMessages").innerHTML = errorMessages;
 return (validFirstname && validLastname && validEmail && validPhone && validUsername && validPassword && validAddress && validCity && validState && validCountry && validZipcode);
}
