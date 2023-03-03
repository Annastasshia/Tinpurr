import express from 'express';
const app = express();

const port = 5501;
app.listen(port, () => console.log('server started' + port));

// Connect HTML IDs to server.js as new constant variables 
const catImage = document.getElementById('catImg');

const APIKEY = 'live_ObuycSV6jqVEg0GnyAL4f2rXo2GgFE3LGHdkcCGHFDWqDSgBSQwClUdxFIY6zfzh';

//create a function to fetch a random cat image from the API
async function fetchRandomCatImage() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?api_key=${'+APIKEY+'}');
    const data = await response.json();
    return data[0].url; 
}

// function to update cat image src
async function updateCatImage() {
    const catImageUrl = await fetchRandomCatImage();
    catImage.src = catImageUrl; 
}
