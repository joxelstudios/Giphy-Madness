
var searchTerms = ["Mecha", "Anime-Cute", "Naruto", "One-Piece"];

function renderButtons(){
    for (var i =0; i < searchTerms.length; i++){
        var newButton = $('<button class = "btn btn-primary">');
        newButton.attr('id', "button" + i);
        newButton.text(searchTerms[i]);
        $('.searchTermsDiv').append(newButton);
    }
}

// This function handles events where the add term button is clicked
$("#add-term").on("click", function (event) {

    // event.preventDefault() prevents submit button from trying to send a form.
    // Using a submit button instead of a regular button allows the user to hit
    // "Enter" instead of clicking the button if desired
    event.preventDefault();
    
    $('.searchTermsDiv').html('')

    // Write code to grab the text the user types into the input field
    var userInput = $('#term-input').val();
    // Write code to add the new term into the terms array
    searchTerms.push(userInput);
    

    // The renderButtons function is called, rendering the list of term buttons
    renderButtons();
  });
  
  renderButtons();
