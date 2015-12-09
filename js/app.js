var yourLoginToken;

$(document).ready(function() {

 //create a registration submit handler//
  $('#register-form').on('submit', function(event){
    event.preventDefault();

    var email = event.target.email.value;
    console.log('reg email is ', email);

    var status = event.target.gaStatus.value;
    console.log('Current GA Status is', status);

    var password = event.target.password.value;
    console.log('Password is', password);

    var confirm = event.target.confirmPassword.value;


    var credentials = {
      credentials: {
        email: email,
        password: password,
        password_confirmation: confirm,
        status: status
      }
    };

  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/register',
    contentType: 'application/json',
    data: JSON.stringify(credentials),
    dataType: 'json'
  }).done(function(userData){
    console.log("Registered User: userData is ", userData);
  })
  });


  $('#login').on('submit', function(event){
    event.preventDefault();
    console.log('it submits')

    var email = event.target.email.value;
    console.log('login email is ', email);

    var password = event.target.password.value;
    console.log('password is', password);

    var credentials = {
      credentials: {
        email: email,
        password: password,
      }
    };

    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/login',
      contentType: 'application/json',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }).done(function(userData){
      console.log("Login User: userData is ", userData);
      yourLoginToken = userData.user.token;
      localStorage.setItem("Token", userData.user.token);
      location.replace('homePage.html');


    });

    return false;
  });
})
