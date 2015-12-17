$(document).ready(function(){



    // Append comment from user to advice column
    $("#postComment").on('click', function(event){
      // Don't do the usual stuff you do when you click a link
      event.preventDefault();

      // Get the contents of the advice textarea
      var advice = $('#givenAdvice').val();
      console.log("Advice is " + advice);

      // Create a comment on the backend using Ajax.
      $.ajax({
        method: 'POST',
        headers : {
          Authorization : "Token token=" + localStorage.getItem("Token")
        },
        url: 'http://localhost:3000/comments',
        data: {comment: {content: advice}},
        }).done(function(data){
          $("#advice").append($("#retrieveComment"));
        console.log("Created the postComment");
        console.log("Data back from server is " , data);
        }).fail(function(){
        console.error("Failed to create the postComment")
      })
    });



    $("#retrieveComment").on('click', function(event){
      $.ajax({
        method: 'GET',
        headers : {
          Authorization : "Token token=" + localStorage.getItem("Token")
        },
        url: 'http://localhost:3000/comments'
        }).done(function(data){
          var theTemplateScript = $("#example-template").html();
          var theTemplate = Handlebars.compile(theTemplateScript);
          var theCompiledHtml = theTemplate(data);
          $("#advice").html(theCompiledHtml);
        console.log("Created the postComment");
        console.log("Data back from server is " , data);
        }).fail(function(){
        console.error("Failed to create the postComment")
      })
    });


    $("#delete").on('click', function(event) {
      event.preventDefault();
      $.ajax({
        method: 'Delete',
        headers : {
          Authorization : "Token token=" + localStorage.getItem("Token")
        },
        url:'http://localhost:3000/comment',
        })
        .done(function() {
          console.log("success");
        })
        .fail(function() {
          console.log("error");
        })
    });

  // Simulate someone clicking on the button as soon as this JS is run
 $("#retrieveComment").trigger('click');





});
