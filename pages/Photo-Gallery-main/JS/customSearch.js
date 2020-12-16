//get user input 
let userInput = document.getElementById('user_search');
let gallery = document.querySelectorAll('.gallery a');


//run search function on every keyup
userInput.addEventListener('keyup', (e) =>{
    const searchTerm = e.target.value.toLowerCase();
    for(let i = 0; i < gallery.length; i++){
        const caption = gallery[i].getAttribute('data-caption');
        if(caption.toLowerCase().includes(searchTerm)) {
            gallery[i].style.display = 'block';
        }
        else{
            gallery[i].style.display = 'none';
        }
    }
});



