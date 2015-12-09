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
        }).done(function(dataFromServer){
        console.log("Created the postComment");
        console.log("Data back from server is " + dataFromServer);
        }).fail(function(){
        console.error("Failed to create the postComment")
      })
    });
});
