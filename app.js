// Generate Static Elements
const projectArray = [
    {
        title:"Simple Calculator",
        img:"img/Calculator.PNG",
        live:'pages/Simple-Calculator-main/index.html',
        github:'https://github.com/JorganBonstragel/Simple-Calculator',
        text:"A vanilla javascript calculator featuring a light and dark mode for extra flair",
        icon: "icons/calculator.svg",
        tags:['css', 'javascript', 'html'],
    },
    {
        title:"Web Dashboard",
        img:"img/Dashboard.PNG",
        live:'pages/Dashboard-main/index.html',
        github:'https://github.com/JorganBonstragel/Dashboard',
        text:"A web dashboard using Chart.js and simulated data to create charts, graphs, and alerts",
        icon: "icons/chart.svg",
        tags:['mobile-first', 'css', 'javascript', 'html'],
    },
    {
        title:"Game Show App",
        img:"img/Gameshow.PNG",
        live:'pages/Game-Show-App-main/index.html',
        github:'https://github.com/JorganBonstragel/Game-Show-App',
        text:'A "Hangman" style game where you guess the secret phrase, using vanilla javascript.',
        icon: "icons/puzzle.svg",
        tags:['javascript', 'css', 'html'],
    },
    {
        title:"Employee Directory",
        img:"img/EmployeeDir.PNG",
        live:'pages/Employee-Directory-main/index.html',
        github:'https://github.com/JorganBonstragel/Employee-Directory',
        text:"A twelve person directory using fetch to pull user data from a random user API, also features a modal to flip through users.",
        icon: "icons/users.svg",
        tags:['javascript', 'css', 'html'],
    },
    {
        title:"Chat App",
        img:"img/ChatApp.PNG",
        live:'pages/Chat-App-main/index.html',
        github:'https://github.com/JorganBonstragel/Chat-App',
        text:"A chat app mockup that just writes user input to the chat history",
        icon: "icons/comments.svg",
        tags:['css', 'javascript', 'html'],
    },
    {
        title:"Photo Gallery",
        img:"img/Gallery.PNG",
        live:'pages/Photo-Gallery-main/index.html',
        github:'https://github.com/JorganBonstragel/Photo-Gallery',
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
            <div class="demo-link"><img class="live-icon" src=${item.icon}><a href=${item.live} class="card-link">Live Demo</a></div>
            <div class="source-link"><img class="live-icon" src="icons/github.svg"><a href=${item.github} class="card-link">Source Code</a></div>
        </div>
    </article>
    `
    
    const cardlist = document.getElementById('card-list')
    cardlist.innerHTML += item; 

})


// Element Selectors
const contactBtn = document.getElementById('contact-btn')
const pageGrid = document.getElementById('page-wrapper')
const contactPanel = document.getElementById('contacts')
const projectBtn = document.getElementById('project-btn')
const cardlist = document.getElementById('card-list')

// Global Variables
let screenWidth = window.screen.width

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
    if(screenWidth > 1080){
        document.body.style.background = "url(img/circlesHighRes.png)"
    }
}


// Contact Panel Collapse
contactBtn.addEventListener('click', () => {
    if(screenWidth < 768){
        if(pageGrid.style.gridTemplateColumns == "50% 50%"){
                pageGrid.style.gridTemplateColumns = "0% 100%"
                contactPanel.webkitTransition = "300ms ease-in-out"
                contactPanel.classList.remove('.showWidth')
                contactPanel.classList.add('collapsedWidth')
        }
        else{
                pageGrid.style.gridTemplateColumns = "50% 50%"
                contactPanel.classList.add('.showWidth')
                contactPanel.classList.remove('collapsedWidth')
        }
    }
    if(screenWidth >= 768 && screenWidth < 1024){
        if(pageGrid.style.gridTemplateColumns == "30% 70%"){
                pageGrid.style.gridTemplateColumns = "0% 100%"
                contactPanel.classList.remove('.showWidth')
                contactPanel.classList.add('collapsedWidth')
        }
        else{
                pageGrid.style.gridTemplateColumns = "30% 70%"
                contactPanel.classList.add('.showWidth')
                contactPanel.classList.remove('collapsedWidth')
        }
    }
    if(screenWidth >= 1024){
        if(pageGrid.style.gridTemplateColumns == "20% 80%"){
                pageGrid.style.gridTemplateColumns = "0% 100%"
                contactPanel.classList.remove('.showWidth')
                contactPanel.classList.add('collapsedWidth')
        }
        else{
                pageGrid.style.gridTemplateColumns = "20% 80%"
                contactPanel.classList.add('.showWidth')
                contactPanel.classList.remove('collapsedWidth')
        }
    }        
})

// Show Project cards (One way Toggle)
projectBtn.addEventListener('click', ()=>{
        console.log('click')
        pageGrid.style.gridTemplateRows = "50px 50vh auto"
        cardlist.style.visibility = "visible"
        if(screenWidth >= 768){
        const footer = document.querySelector('footer')
        footer.scrollIntoView();
        }
        else{
            cardlist.children[0].scrollIntoView();
        }
})
