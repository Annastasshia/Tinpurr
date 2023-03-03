$(document).ready(function(){
    $("#jokeBtn").on("click", function(event){
        event.preventDefault();        
        console.log("CLICK");
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
                "x-rapidapi-key": "56967c5012mshefae2d0c353bc84p1b80c2jsnad5515b32ae3",
                "accept": "application/json"
            }
        };
        
        $.ajax(settings).done(function (response) {
            console.log("I was clicked");
            console.log(response);
            console.log(response.value);
            const joke = response.value;
            const jokeList = document.getElementById('jokeHere');
            jokeList.innerHTML += '<p>'+ joke + '</p>';
        });
    });
});