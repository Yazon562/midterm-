function javaFunc ()
{
    var user = document.getElementById("username").value
    var pass = document.getElementById("password").value
    var conf = document.getElementById("confirmation").value

    var userL = user.length;
    var passL = pass.length;
    var conf = conf.length;
    console.log(user);

    if (userL >=4 && userL <=8 && passL >=4 && passL <=8  && confL >=4 && confL <=8  )
    

    {
        alert("user another if funtion to compare password")
    }

    else{
        alert("The length of user name and password must be between 4 and 8")
    }       

    

}
