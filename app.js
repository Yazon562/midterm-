
function validateForm() {

var username = document.forms["myForm"]["Username"].value;

var Password = document.forms["myForm"]["Password"].value;

var confPassword = document.forms["myForm"]["confPassword"].value;

if (username == "") {//validation for username

document.getElementById("msg").innerHTML='Please username not empty<br>';

return false;

}

if (Password == "") {//validation for password

document.getElementById("msg").innerHTML='Please Password not empty<br>';

return false;

}

if (confPassword == "") {//validation for Confriemd password

document.getElementById("msg").innerHTML='Please Conform Password not empty<br>';

return false;

}

if (username.length >8 || username.length < 4 ) {//validation for username

document.getElementById("msg").innerHTML='User Name Must be between 4 and 8 character<br>';

return false;

}

if (Password.length >8 || Password.length < 4 ) {//validation for password

document.getElementById("msg").innerHTML='Password Must be between 4 and 8 character<br>';

return false;

}

if (confPassword.length >8 || confPassword.length < 4 ) {//validation for Confriemd password

document.getElementById("msg").innerHTML='Confirmed Password Must be between 4 and 8 character<br>';

return false;

}

//validation for password and Confriemd password are same or not

if(confPassword.localeCompare(Password)==0) {

document.getElementById("msg").innerHTML="";

document.getElementById("msg1").innerHTML='The input are correct';

return false;}

else{

document.getElementById("msg").innerHTML='Password and Confirmed Password Not Same<br>';

return false;}

}