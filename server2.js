$(document).ready(function(){
    $("#jokeBtn").on("click", function(event){
        event.preventDefault();        
        console.log(title);
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
                "x-rapidapi-key": "your-api-key-here",
                "accept": "application/json"
            }
        };
        
        $.ajax(settings).done(function (response) {
            console.log("I was clicked");
            console.log(response);
            console.log(response.value);
            const joke = response.value;
            const jokeList = document.getElementById('JokeHere');
            jokeList.innerHTML += '<p>'+ joke + '</p>';
        });
    });
});