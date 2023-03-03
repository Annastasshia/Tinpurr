$(document).ready(function(){
    var currentIndex = 0; // keep track of the current breed index

    $("#breedBtn").on("click", function(event){
        event.preventDefault();        
        console.log("CLICK");
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.thecatapi.com/v1/breeds",
            "method": "GET",
            "headers": {
                "x-api-key": "live_ObuycSV6jqVEg0GnyAL4f2rXo2GgFE3LGHdkcCGHFDWqDSgBSQwClUdxFIY6zfzh",
                "accept": "application/json"
            }
        };
        
        $.ajax(settings).done(function (response) {
            console.log("I was clicked");
            console.log(response);
            console.log(currentIndex);
            const breed = response[currentIndex].name;
            const infoIframe = response[currentIndex].vetstreet_url;
            const breedListVar = document.getElementById('breedHere');
            breedListVar.innerHTML = '<p>'+ breed + '</p><br><iframe id="test" src="'+ infoIframe +'" height= "800" width="850" ></iframe>';
            currentIndex = (currentIndex + 1) % response.length; // increment index and wrap around if needed
        });
    });
});
