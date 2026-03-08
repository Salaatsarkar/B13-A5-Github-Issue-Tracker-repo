//button clikable
document.getElementById('signin-btn').addEventListener('click', function(){
    const username = document.getElementById('input-username');
    const usernameValue = username.value ;
    console.log(usernameValue);
    //2. get password value

    const inputPassword = document.getElementById('input-password');
    const password = inputPassword.value ;
    console.log(password);

    //3. match username and password
    if(usernameValue == "admin" && password == "admin123"){
        alert("Login Successful");
        window.location.assign("./home.html");
    }
    else{
        alert("log in Failed");
        return;
    }
})