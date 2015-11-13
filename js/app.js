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

    var birthday =$('#reg-birthday').val();
    console.log('Birthday is', birthday);

    var credentials = {
      credentials: {
        email: email,
        password: password,
        password_confirmation: confirm,
        birthday: birthday,
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



});
