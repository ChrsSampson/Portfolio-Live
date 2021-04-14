// Generate Static Elements
const projectArray = [
    {
        title:"Simple Calculator",
        img:"img/Calculator.png",
        live:'/pages/Simple-Calculator-main/index.html',
        github:'https://github.com/JorganBonstragel/Simple-Calculator',
        text:"A vanilla javascript calculator featuring a light and dark mode for extra flair",
        icon: "icons/calculator.svg",
        tags:['css', 'javascript', 'html'],
    },
    {
        title:"Web Dashboard",
        img:"img/Dashboard.png",
        live:'/pages/Dashboard-main/index.html',
        github:'https://github.com/JorganBonstragel/Dashboard',
        text:"A web dashboard using Chart.js and simulated data to create charts, graphs, and alerts",
        icon: "icons/chart.svg",
        tags:['mobile-first', 'css', 'javascript', 'html'],
    },
    {
        title:"Chat App",
        img:"img/ChatApp.png",
        live:'/pages/Chat-App-main/index.html',
        github:'https://github.com/JorganBonstragel/Chat-App',
        text:"A chat app mockup that just writes user input to the chat history",
        icon: "icons/comments.svg",
        tags:['css', 'javascript', 'html'],
    },
    {
        title:"Photo Gallery",
        img:"img/Gallery.png",
        live:'/pages/Photo-Gallery-main/index.html',
        github:'https://github.com/JorganBonstragel/Photo-Gallery',
        text:"A small photo gallery with using BaguetteBox.js and a custom javascript search function.",
        icon: "icons/photo.svg",
        tags:['javascript', 'css', 'html'],
    }
     
]

DisplayCards = () => {
    let angle = 0
    projectArray.forEach( (project, i) => {
        let card = `
            <article class="card frosted" id="card${i}">
                <h4>${project.title}</h4>
                <img class="card-img" src=${project.img}>
                <p>${project.text}</p>
                <div>
                    <button href=${project.live}>Live Demo <img class="icon" src=${project.icon}></img></button>
                    <button href=${project.github}>Github Repo<img class="icon" src="../icons/github.svg"></button>
                </div>
            </article>
        `
        
        document.querySelector('.card-container').insertAdjacentHTML('afterbegin', card)
        
    })
}

// Common Element Selectors (coming soon)



// Initialization page on window load
window.onload = () => {
    DisplayCards()
}

window.onresize = () => {

}
    

