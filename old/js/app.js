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
        title:"Pingplotter Multi-Viewer",
        img:"img/Gallery.png",
        live:'/pages/Photo-Gallery-main/index.html',
        github:'https://github.com/JorganBonstragel/Photo-Gallery',
        text:"An internal tool used to monitor encoder systems that syncs up with firebase",
        icon: "icons/photo.svg",
        tags:['Electron', 'Firebase', 'Javascript'],
    }
     
]

DisplayCards = () => {
    projectArray.forEach( (project, i) => {
        let tags = ``

        project.tags.forEach((tag) => {
            tags += ` <span>${tag}</span> `
        })

        let card = `
            <article class="card frosted" id="card${i}">
                <h4>${project.title}</h4>
                <img class="card-img" src=${project.img}>
                <p>${project.text}</p>
                <div class="card-tags">
                    ${tags}
                </div>
                <div>
                    <a href=${project.live}>Live Demo</a>
                    <a href=${project.github}>Github Repo</a>
                </div>
            </article>
        `
 
        document.querySelector('.card-container').insertAdjacentHTML('afterbegin', card)

    })
    
    InitSlick()
}

InitSlick = () => {
    $('.card-container').slick({
        autoplay:true,
        autoplaySpeed:3000,
        infinite: true,
        dots:false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows:false,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:true
            }
          }
          
        ]
      });
}
// Common Element Selectors (coming soon)


// Initialization page on window load
window.onload = () => {
    DisplayCards()
}

window.onresize = () => {

}




