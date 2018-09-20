var searchTerms = ["Mecha", "Anime-SciFi", "Space", "Super-Soldier"];
var currentTerm = [];

function renderButtons() {
    for (var i = 0; i < searchTerms.length; i++) {
        var newButton = $('<button class = "btn btn-primary searchTerm">');
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

function displayGifs(){
    var term = $(this).html();
    // currentTerm = [];
    // currentTerm.push(term);
    console.log("searching for gifs relating to: " + term);
    var key= "dCt58iU9cjK1eHloafbWL4RlKzFLWU2J"

    $.ajax({
        url: "http://api.giphy.com/v1/gifs/search?q="+ term +"&api_key="+key+"&limit=10&rating=pg",
        method: "GET"
    }).then(function(resp){
        console.log(resp);
        resp.data.forEach(function(gif){
            console.log(gif);
            var imgURL= gif.images.original.url;
            console.log(imgURL);
            var img = $('<img width="300px">');
            img.attr('src', imgURL);
            img.attr('alt', term+'-gif');
            $('.gifDiv').prepend(img);
        })
    })

}

renderButtons();

$(document).on('click', ".searchTerm", displayGifs);