//initialize BaguetteBox.js
window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
});


//----------GENERATE CONTENT-----------
//store captions in variables
const Hay = "I love hay bales. Took this snap on a drive through the countryside past some straw fields.";
const Lake = "The lake was so calm today. We had a great view of the snow on the mountains from here.";
const Canyon = "I hiked to the top of the mountain and got this picture of the canyon and trees below."; 
const Iceberg = "It was amazing to see an iceberg up close, it was so cold but didn’t snow today. ";
const Desert = "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.";
const Fall = "Fall is coming, I love when the leaves on the trees start to change color.";
const Plantation = "I drove past this plantation yesterday, everything is so green!";
const Dunes = "My summer vacation to the Oregon Coast. I love the sandy dunes!";
const Countryside = "We enjoyed a quiet stroll down this countryside lane.";
const Sunset = "Sunset at the coast! The sky turned a lovely shade of orange.";
const Cave = "I did a tour of a cave today and the view of the landscape below was breathtaking.";
const Bluebells = "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.";

//create array of photos
let images = new Array(Hay, Lake, Canyon, Iceberg, Desert, Fall, Plantation, Dunes, Countryside, Sunset, Cave, Bluebells);
//create array of alt values
let imagesAlt = new Array("Hay", "Lake", "Canyon", "Iceberg", "Desert", "Fall", "Plantation", "Dunes", "Countryside", "Sunset", "Cave", "Bluebells");

//generate grid items from arrays (I hope)
for (let count = 0; count <= 11; count++ ){
        document.getElementById("gallery").innerHTML += `
        <a href="photos/${count}.jpg" data-caption="${images[count]}">
        <img src="photos/thumbnails/${count}.jpg" alt="${imagesAlt[count]}">
        </a>
        `;
       
}
