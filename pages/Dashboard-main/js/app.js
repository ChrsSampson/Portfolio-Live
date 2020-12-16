//Declare Element Selectors
let alert = document.getElementById('alert-exit')
let bell = document.getElementById('bell-icon')
let dropdown = document.getElementById('dropdown')
let formatContainer = document.getElementById('chart-format')
let userSearch = document.getElementById('user-seach')
let dropContainer = document.getElementById('auto-list');
const autoItem = document.querySelectorAll('.drop-item')
//Graph Objects
let lineGraph = {
    target:'line-chart', 
    type:'line',
    labels:['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    bgColor:'rgba(38, 125, 217, .3)',
    borderColor:'rgb(242, 82, 28)',
    borderWidth: 1,
    data:randomData(11, 1000),
    lineTension:0,
    pointRadius:4,
    pointBorderColor:'rgb(232, 105, 59)',
    pointBackgroundColor:'rgba(255, 255, 255, 1)',
    options:{
                maintainAspectRatio: false,
                responsive: true,
                legend:{
                    display:false,
                    labels:{
                        fontColor: '#737373',
                        defaultFontFamily: 'Arial',
                    },
                },
                scales:{
                    yAxes:[{
                        ticks:{
                            min:0,
                            stepSize: 250,
                        }                      
                    }],
                },
            }
}

let barGraph = {
    target:'bar-chart', 
    type:'bar',
    labels:['S','M','T','W','T','F','S'],
    bgColor:'rgb(232, 105, 59)',
    borderColor:'rgb(255, 99, 132)',
    data:randomData(7, 300),
    options:{
        maintainAspectRatio: false,
        responsive: true,
        legend:{
            display:false,
            labels:{
                fontColor: '#737373',
                defaultFontFamily: 'Arial',
            },
        },
        scales:{
            yAxes:[{
                ticks:{
                    min:50,
                    max:300,
                }                      
            }],
        },
    }
}

let pieGraph = {
    target:'pie-chart', 
    type:'doughnut',
    labels:['Phone', 'Tablet', 'Desktop'],
    bgColor:['rgb(232, 105, 59)','rgb(38, 125, 217)','#737373'],
    borderColor:'#ffffff',
    borderWidth: 0,
    data:randomData(3, 1000),
    options:{
        maintainAspectRatio: false,
        responsive: true,
        legend:{
            display:false,
            labels:{
                fontColor: '#737373',
                defaultFontFamily: 'Arial',
            },
        },
    }
}


//Draw Graph
function createGraph(graph){
    var ctx = document.getElementById(graph.target).getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart
        type: graph.type,

        // The dataset
        data: {
            labels: graph.labels,
            datasets: [{
                label: '',
                backgroundColor: graph.bgColor,
                borderColor: graph.borderColor,
                borderWidth: graph.borderWidth,
                data: graph.data,
                lineTension: graph.lineTension,
                pointRadius: graph.pointRadius,
                pointBorderColor: graph.pointBorderColor,
                pointBackgroundColor: graph.pointBackgroundColor
            }]
        },

        // Configuration options go here
        options: graph.options,
       
    });
}


//Generate Random Chart Data
function randomData(sets, max){
    let data = [];
    for(let i = 0; i < sets; i++){
      data[i] = Math.floor(Math.random() * max);   
    }
    return data;
}

// Format Social media number
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


//Create Random Data for Social Widget
function createSocialData(){
    const twitter = document.getElementById('twitter-data');
    const facebook = document.getElementById('facebook-data');
    const google = document.getElementById('google-data');
    const target = [twitter,facebook,google];

    for(let i = 0; i < target.length; i++){
        let data = Math.floor(Math.random() * 10000);
        target[i].innerHTML = numberWithCommas(data);   
    }
}


//user objects
const member1={ img:'images/member-1.jpg',
                email:'victoria.chambers@example.com',
                name:'Victoria Chambers',
                date:'10/15/21',
                activity:'commented on this Apps SEO Tips',
                hour:'4 Hours Ago'}
    
const member2={ img:'images/member-2.jpg',
                email:'dayle.byrd@example.com',
                name:'Dale Byrd',
                date:'10/15/21',
                activity:'commented on this Apps SEO Tips',
                hour:'4 Hours Ago'}
                
const member3={ img:'images/member-3.jpg',
                email:'dawn.wood@example.com',
                name:'Dawn Wood',
                date:'10/15/21',
                activity:'commented on this Apps SEO Tips',
                hour:'4 Hours Ago'}

const member4={ img:'images/member-4.jpg',
                email:'dan.oliver@example.com',
                name:'Dan Oliver',
                date:'10/15/21',
                activity:'posted this Apps SEO Tips',
                hour:'6 Hours Ago'}

// Function accepts Type string of 'members' or 'activity'
function createListItems(type){
    if(type == 'member'){
        const list = document.getElementById('member-ul');
        const users = [member1, member2, member3, member4]
        for(let i = 0; i < users.length; i++){
            let listItem = document.createElement("li");
            listItem.className = "member-listItem"
            listItem.innerHTML = `  <img class="user-img" src="${users[i].img}">
                                    <h5>${users[i].name}</h5>
                                    <p>${users[i].email}</p>
                                    <label>${users[i].date}</label>
                                `;
            list.appendChild(listItem);
        }
    }
    else if (type == 'activity'){
        const list = document.getElementById('activity-ul');
        const users = [member1, member2, member3, member4]
        for(let i = 0; i < users.length; i++){
            let listItem = document.createElement("li");
            listItem.className = "activity-listItem"
            listItem.innerHTML = `  <img class="user-img" src="${users[i].img}">
                                    <h5>${users[i].name} ${users[i].activity}</h5>
                                    <p>${users[i].hour}</p>
                                    <i class="fas fa-chevron-right"></i>
                                `;
            list.appendChild(listItem);
        }

    }

}


//Initialize Elements on Page load
window.addEventListener('DOMContentLoaded', (e)=>{
    createGraph(lineGraph);
    createGraph(barGraph);
    createGraph(pieGraph);

    createSocialData();

    createListItems('member');
    createListItems('activity');
    populateList();
    checkStorage();
});

//Dismiss Alert
alert.addEventListener('click', (e)=>{
    const alertDiv = document.getElementById('alert-container');
    alertDiv.style.height = "0px";
    alertDiv.style.display = "none";
 });

//Dropdown menu
bell.addEventListener('click', (e)=>{
    items = document.getElementsByClassName("drop-item")

    if(dropdown.style.display == "none"){
        dropdown.style.display = "flex";
        dropdown.style.height = "auto";
        for(let i=0; i < items.length; i++){
            items[i].style.color = "rgba(97, 97 , 97, 1)";
            items[i].style.margin = "10px";
         }
    }
    else{
        dropdown.style.display = "none";
        dropdown.style.height = "0px";
        for(let i=0; i < items.length; i++){
            items[i].display = "none"
        }
    }
    
});

//Change chart format based on format buttons
formatContainer.addEventListener('click', (e)=>{
    const formatTypes = formatContainer.children;
    const chartContainer = document.getElementById('line-container');
    let chart = document.getElementById('line-chart');
    console.log(e.target);
    for(let i = 0; i < formatTypes.length; i++){
        formatTypes[i].classList.remove('select');
    }
    chart.remove();
    if(e.target.textContent === 'Hourly'){
        lineGraph.labels = ['10','20','30','40','50'];
        lineGraph.data = randomData(5, 1000);
                
    }
    else if(e.target.textContent === 'Daily'){
        lineGraph.labels = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];
        lineGraph.data = randomData(25, 1000);
        
    }
    else if(e.target.textContent === 'Weekly'){
        lineGraph.labels = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'];
        lineGraph.data = randomData(11, 1000);
        
    }
    else if(e.target.textContent === 'Monthly'){
        lineGraph.labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
        lineGraph.data = randomData(12, 1000);
        
    }
    let newChart = document.createElement('canvas')
    e.target.className = "select";
    newChart.id = "line-chart";
    chartContainer.appendChild(newChart);
    createGraph(lineGraph);
});


//Auto Complete Variables
const memberArray = [member1,member2,member3,member4];
let listItems = dropContainer.children;

//hide show and hide auto complete list
function toggleAutoComplete(input) {
    if (!input == ''){
        dropContainer.style.display = "block";
    }
    else{
        dropContainer.style.display = "none";
        
    } 
}

//populate auto list container
function populateList(){
    for(let i = 0; i < memberArray.length; i++){
        item = document.createElement('li');
        item.textContent = memberArray[i].name
        item.className = 'drop-item';
        item.style.display = 'none';
        dropContainer.appendChild(item);
    }
}

//autoComplete
userSearch.addEventListener('keyup', (e)=>{
    let input = userSearch.value.toLowerCase();
    
    //Hide/Show Drop Down
    toggleAutoComplete(input);
    
    for(let i = 0; i < listItems.length; i++){
       let name = memberArray[i].name;
       if(listItems[i].textContent.toLowerCase().includes(input)){
            listItems[i].style.display = "block";
       }
       else{
           listItems[i].style.display = "none";
       }
       
    }
    
});

// add autocomplete suggestion to input box
dropContainer.addEventListener('click', (e)=>{
    if(e.target.className = "drop-item"){
        userSearch.value = e.target.textContent;
    }
    dropContainer.style.display = "none";
});

//simulate sending message
const send = document.getElementById('message-send')
const userMessage = document.getElementById('user-message');
const error = document.getElementById('error')

send.addEventListener('click', (e)=>{
    const inputArray = [userSearch, userMessage];
    if (userMessage.value == "" || userSearch.value == ""){
        error.style.display = 'block';
            if(userMessage.value == ''){
                userMessage.style.border = "1px solid red";
            }
            else if(userSearch.value == ''){
                userSearch.style.border = "1px solid red";
            }
        }
    
    else{
        userMessage.value ="";
        userSearch.value = "";
        error.textContent = "Message Sent Successfully";
        error.style.color = "green";
        error.style.display = 'block';
    }
    

});


//Save setting to local storage
const save = document.getElementById('setting-save');
const email = document.getElementById('email-checkbox');
const public = document.getElementById('public-checkbox');
const time = document.getElementById('setting-timezone');
const cancel = document.getElementById('setting-cancel');

// read local storage
function checkStorage(){
    if(localStorage.getItem("email")=="true"){
        document.getElementById('email-checkbox').checked = true;
    }
    else if(localStorage.getItem("email")=="false"){
        document.getElementById('email-checkbox').checked = false;
    }
    if(localStorage.getItem("public")=="true"){
        document.getElementById('public-checkbox').checked = true;
    }
    else if(localStorage.getItem("public")=="false"){
        document.getElementById('public-checkbox').checked = false;
    }
    time.value = localStorage.getItem("timezone");
}

save.addEventListener('click', (e)=>{
        if(email.checked){
            localStorage.setItem("email", true)
        }
        else if (!email.checked){
            localStorage.setItem("email", false) 
        }
        
        if(public.checked){
            localStorage.setItem("public", true)
        }
        else if (!public.checked){
            localStorage.setItem("public", false) 
        }
    
     
        localStorage.setItem('timezone', time.value);
    
});

//wipe storage
cancel.addEventListener('click', (e)=>{
    localStorage.clear();
    localStorage.setItem("public", false);
    localStorage.setItem("email", false);
});



