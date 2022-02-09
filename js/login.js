document.getElementById("login-submit").addEventListener('click', function(){
    // get uesr Email 
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    // get user password 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check Email and password 
    if(userEmail == 'abir@gmail.com' && userPassword == '11223344'){
        window.location.href= 'banking.html'
    };

});