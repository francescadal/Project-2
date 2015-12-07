var yourLoginToken;


$(document).ready(function() {
console.log("Page is loaded");


 //create a registration submit handler//
 $('#register-form').on('submit', function(event){
    event.preventDefault();

    var email = $('#reg-email').val();
    console.log('reg email is ', email);

    var status = $('#reg-status').val();
    console.log('Current GA Status is', status);

    var password =$('#reg-password').val();
    console.log('Password is', password);

    var confirm =$('#reg-pasConfirm').val();
    console.log('Password is', confirm);

    var credentials = {
      credentials: {
        email: email,
        password: password,
        password_confirmation: confirm,
        status: status
      }
    };



    debugger;
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/register',
      contentType: 'application/json',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }).done(function(userData){
      console.log("Registered User: userData is ", userData);
    })

 })


$('#login').on('submit', function(event){
    event.preventDefault();
    console.log('it submits')

    var email = $('#login-email').val();
    console.log('login email is ', email);

    var password =$('#login-pass').val();
    console.log('login is', password);




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
      location.replace('homePage.html');
    })




  });







});
