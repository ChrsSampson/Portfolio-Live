// Array of Projects
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
        title:"Pingplotter Multi-Viewer",
        img:"img/Gallery.png",
        live:'/pages/Photo-Gallery-main/index.html',
        github:'https://github.com/JorganBonstragel/Photo-Gallery',
        text:"An internal tool used to monitor encoder systems that syncs up with firebase",
        icon: "icons/photo.svg",
        tags:['Electron', 'Firebase', 'Javascript'],
    }
]

CreateSlides = () => {
    projectArray.forEach(project => {
        const slide = `
            <div class="card frosted">
                <div class="card-content">
                    <h4>${project.title}</h4>
                    <p>${project.text}</p>
                    <div class="tags"></div>
                    <div class="card-buttons">
                        <a class="nav-link-light" href=${project.live}>Demo</a>
                        <a class="nav-link-light" href=${project.github}>Github Repo</a>
                    </div>
                </div>
                <div>
                    <img class="card-img" src=${project.img}>
                </div>
            </div>
        `
        document.querySelector('.slides').insertAdjacentHTML('afterbegin', slide)
        
        project.tags.forEach(tag => {
            document.querySelector('.tags').insertAdjacentHTML('afterbegin', `<span> ${tag} </span>`)
        })
    })
    // Init Slick
    $('.slides').slick({
        autoplay:true,
        autoplaySpeed: 4000,
        dots:true
    })

}

// Initialize the Page
$(document).ready(() => {
    CreateSlides()
})