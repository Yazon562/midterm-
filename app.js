function validateForm() {

    var username = document.forms["myForm"]["Username"].value;
    
    var Password = document.forms["myForm"]["Password"].value;
    
    var confPassword = document.forms["myForm"]["confPassword"].value;
    
    if (username == "") {
    
    document.getElementById("msg").innerHTML='Please username not empty<br>';
    
    return false;
    
    }
    
    if (Password == "") {
    
    document.getElementById("msg").innerHTML='Please Password not empty<br>';
    
    return false;
    
    }
    
    if (confPassword == "") {
    
    document.getElementById("msg").innerHTML='Please Confirm Password not empty<br>';
    
    return false;
    
    }
    
    if (username.length >8 || username.length < 4 ) {
    
    document.getElementById("msg").innerHTML='The length of user name and password must be between 4 and 8<br>';
    
    return false;
    
    }
    
    if (Password.length >8 || Password.length < 4 ) {
    
    document.getElementById("msg").innerHTML='The length of user name and password must be between 4 and 8<br>';
    
    return false;
    
    }
    
    if (confPassword.length >8 || confPassword.length < 4 ) {
    
    document.getElementById("msg").innerHTML='The length of user name and password must be between 4 and 8<br>';
    
    return false;
    
    }
    
    
    if(confPassword.localeCompare(Password)==0) {
    
    document.getElementById("msg").innerHTML="";
    
    document.getElementById("msg1").innerHTML='The input values are correct';
    
    return false;}
    
    else{

    
    document.getElementById("msg").innerHTML='The passwords are different<br>';
    
    return false;}
    
}
