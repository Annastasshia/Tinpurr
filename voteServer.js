$(document).ready(function(){
    var currentIndex = 0; // keep track of the current Cat index

    $("#loveCatBtn").on("click", function(event){
        event.preventDefault();        
        console.log("CLICK");
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.thecatapi.com/v1/images/search",
            "method": "GET",
            "headers": {
                "x-api-key": "live_ObuycSV6jqVEg0GnyAL4f2rXo2GgFE3LGHdkcCGHFDWqDSgBSQwClUdxFIY6zfzh",
                "accept": "application/json"
            }
        };
        
        $.ajax(settings).done(function (response) {
            console.log("Response object:", response);

            console.log("I was clicked");
            console.log(response.url);
            console.log(currentIndex);
            const catImageSrc = response[currentIndex].url;
            const catListVar = document.getElementById('catImg');
            catListVar.innerHTML = '<br><img id="testImg" src="'+ catImageSrc+'"/>';
            currentIndex = (currentIndex + 1) % response.length; // increment index and wrap around if needed
        });
    });
});