// Generate Static Elements
const projectArray = [
    {
        title:"Simple Calculator",
        img:"img/Calculator.png",
        live:'pages/Simple-Calculator-main/index.html',
        github:'https://github.com/ChrsSampson/Simple-Calculator',
        text:"A vanilla javascript calculator featuring a light and dark mode for extra flair",
        icon: "icons/calculator.svg",
        tags:['css', 'javascript', 'html'],
    },
    {
        title:"Web Dashboard",
        img:"img/Dashboard.png",
        live:'pages/Dashboard-main/index.html',
        github:'https://github.com/ChrsSampson/Dashboard',
        text:"A web dashboard using Chart.js and simulated data to create charts, graphs, and alerts",
        icon: "icons/chart.svg",
        tags:['mobile-first', 'css', 'javascript', 'html'],
    },
    {
        title:"Game Show App",
        img:"img/Gameshow.png",
        live:'pages/Game-Show-App-main/index.html',
        github:'https://github.com/ChrsSampson/Game-Show-App',
        text:'A "Hangman" style game where you guess the secret phrase, using vanilla javascript.',
        icon: "icons/puzzle.svg",
        tags:['javascript', 'css', 'html'],
    },
    {
        title:"Employee Directory",
        img:"img/EmployeeDir.png",
        live:'pages/Employee-Directory-main/index.html',
        github:'https://github.com/ChrsSampson/Employee-Directory',
        text:"A twelve person directory using fetch to pull user data from a random user API, also features a modal to flip through users.",
        icon: "icons/users.svg",
        tags:['javascript', 'css', 'html'],
    },
    {
        title:"Chat App",
        img:"img/ChatApp.png",
        live:'pages/Chat-App-main/index.html',
        github:'https://github.com/ChrsSampson/Chat-App',
        text:"A chat app mockup that just writes user input to the chat history",
        icon: "icons/comments.svg",
        tags:['css', 'javascript', 'html'],
    },
    {
        title:"Photo Gallery",
        img:"img/Gallery.png",
        live:'pages/Photo-Gallery-main/index.html',
        github:'https://github.com/ChrsSampson/Photo-Gallery',
        text:"A small photo gallery with using BaguetteBox.js and a custom javascript search function.",
        icon: "icons/photo.svg",
        tags:['javascript', 'css', 'html'],
    }
     
]

projectArray.forEach(item => {
    let tags = "";
    // Sort out the stupid child array, This is another stupid bad sin I have done
    for(let i = 0; i < item.tags.length; i++){
        tags += `<a class="tag">${item.tags[i].toUpperCase()}</a>`;
    }

    item = `
    <article class="card">
        <h2 class="transition">${item.title}</h2>
        <div class="project-img-container">
            <img class="project-img" src=${item.img}>
        </div>
        <p>${item.text}</p>
        <div class="tag-container">${tags}</div>
        <div class="card-link-container">
            <div class="demo-link"><img class="live-icon" src="/icons/demo.svg"><a href=${item.live} class="card-link">Live Demo</a></div>
            <div class="source-link"><img class="live-icon" src="/icons/github.svg"><a href=${item.github} class="card-link">Source Code</a></div>
        </div>
    </article>
    `
    
    const cardlist = document.getElementById('card-list')
    cardlist.innerHTML += item; 

})


// Element Selectors
const bannerContainer = document.getElementById('banner-container')
const contactBtn = document.getElementById('contact-btn');
const contactExit = document.getElementById('contact-exit');
const pageGrid = document.getElementById('page-wrapper');
const contactPanel = document.getElementById('info-section');
const projectBtn = document.getElementById('project-btn');
const cardlist = document.getElementById('card-list');
const navbox = document.getElementById('nav-checkbox');
const skype = document.getElementById('skype');
const skypeInfo = document.getElementById('skype-info');

// Global Variables
let screenWidth = window.screen.width;

// Initialization functions
window.addEventListener('DOMContentLoaded', ()=>{
    adjustBackground();
    
})

// refresh screenWidth on resize
window.onresize = () => {
    screenWidth = window.screen.width;
    adjustBackground();
}

// check for normal resolution or high resolution screens
function adjustBackground(){
    if(screenWidth > 1921){
        document.body.style.background = "url(img/circlesHighRes.png)"
    }
    else{
        document.body.style.background = "url(img/circles.png)"
    }
  
}

// Contact Panel expand
contactBtn.onclick = () => {
    contactPanel.classList.toggle("collpasedWidth")
     
}
// close panel
contactExit.onclick = () => {
    contactPanel.classList.toggle('collpasedWidth');
}

// skype garbage (I hate social media)
skype.onclick = () =>{
    skypeInfo.style.opacity = "1"
}

// Show Project cards (One way Toggle)
projectBtn.onclick = () => {

        console.info("pizza time")

        cardlist.classList.toggle('collpasedVertical');
        
        if(screenWidth >= 768){
        const footer = document.querySelector('footer');
        footer.scrollIntoView();
        }
        else{
            cardlist.children[0].scrollIntoView();
        }

        bannerContainer.classList.toggle("banner-resize");
}