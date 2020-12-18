// Selectors
const main = document.querySelector('main');
const headline = document.querySelector('.headline');
const tagline = document.querySelector('.tagline');
const btnContainer = document.getElementById('btn-container');
const startButton = document.getElementById('startButton');
const loginButton = document.getElementById('loginButton');
const newButton = document.getElementById('newUser');
const resetButton = document.getElementById('resetButton');
const userList = document.getElementById('users');
const planDiv = document.querySelector('.plan');
const mealList = document.getElementById('meals');

// Variables

let user = ""; 
const meals = [
    "Honey Garlic Glazed Salmon",
    "Chicken Stew",
    "Chicken Posole",
    "Bacon & Spinach Stuffed Chicken",
    "Tex-Mex Meatballs",
    "Easy Turkey Tetrazzini",
    "Air Fryer Pork Chops",
    "Easy Chicken Fajitas",
    "Classic Calzones",
    "Baked Spaghetti",
    "Cilantro Lime Chicken",
    "Creamy Tuscan Chicken",
    "Garlicky Spaghetti",
    "Turkey Casserole",
    "Cheesy Ground Beef Tacos",
    "Better-Than-Takeout Beef and Broccoli",
    "Crock-Pot Chicken Noodle Soup",
    "Thai Chicken Lettuce Cups",
    "Air Fryer Shrimp",
    "Lemon Pepper Chicken",
    "Sheet Pan Honey Mustard Pretzel Chicken",
    "Beef Totchos",
    "Pineapple Baked Chicken",
    "Easy Pasta Carbonara",
    "Slow-Cooker Chicken Tortilla Soup",
    "Easy Shepherd's Pie",
    "Slow Cooker Chicken Thighs",
    "Easy Cajun Jambalaya",
    "Italian Chicken Skewers",
    "Sloppy Joe Grilled Cheese",
    "Chicken 'n Waffles Casserole",
    "A Single Tater-Tot",
    "The blood of your enemies",
    "Revenge (Served cold)",
    "A Single Crouton",
    "Tater Salad",
    "Sleep",
    "Hot BBQ Chicken Wings",
    "Organic Low Fat Sugar Free Diet Kosher Vegan Never-Frozen 'Turkey' Slab",
    "Avacado Toast"
    ]; 

// HELPER FUNCTIONS

//Figure out what day it is 
const getDay = () => {
    var d = new Date();
    var day = d.getDay()
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[day];
};

// Create new users and keep track of user list in Local Storage
function createUser(username){
    let newUsr = ''

    if(localStorage.getItem('users') == null){

        oldUsrs = [username]

        localStorage.setItem('users', JSON.stringify(oldUsrs));

        user = username

        showStartScreen(user, getDay());
    }
    // Check input for not blank
    else if(username != ""){

        let oldUsrs = localStorage.getItem('users');
        oldUsrs = JSON.parse(oldUsrs);

        newUsr = username;

            console.info(oldUsrs)

        oldUsrs.push(newUsr);

        console.log(oldUsrs);

        localStorage.setItem('users', JSON.stringify(oldUsrs));
        user = username

        showStartScreen(user, getDay());
    }
    // Error Path
    else{
       alert("No Name entered");
       resetApp();
    }
      
}

// Compile user list and show list of users
function showUserList(){
    userList.innerHTML = "";

    let storedUsers = localStorage.getItem('users');
    storedUsers = JSON.parse(storedUsers);
    console.log(storedUsers)

    for(let i = 0; i < storedUsers.length; i++){
        let item  = document.createElement('li');
        item.textContent = storedUsers[i];
        userList.appendChild(item);
    }

    planDiv.classList.remove('hidden');
    userList.classList.remove('hidden');
}

// Hide account buttons and show start button with username displayed
function showStartScreen(user, day){
    headline.textContent = `Welcome ${user}`
    tagline.textContent = `Get ready to view some of your options for ${day}`
    loginButton.classList.add("hidden");
    newButton.classList.add("hidden");
    startButton.classList.remove("hidden")
}

// Generate Random Numbers and use them on the meals array.
function selectMeals(max){
    let randomMeals = [];
    let selectedMeals = [];
    for(let i = 0; i < 5; i++){
       let arrItem = Math.floor(Math.random() * Math.floor(max));
        randomMeals.push(arrItem);
    }
    
    for(let i = 0; i < randomMeals.length; i++){
        selectedMeals.push(meals[randomMeals[i]]);
    }
    
    return selectedMeals;

}

// Generate Meal List from Selected Meals
function displayMeals(mealArr){
    for(let i = 0; i < mealArr.length; i++ ){
        let item = document.createElement('li');
        item.textContent = mealArr[i];
        mealList.appendChild(item);
    }
}

// Display meals To user 
function showPlan(){
    mealList.innerHTML = "";

    let userMeals = selectMeals(meals.length);
    displayMeals(userMeals);

    planDiv.classList.remove('hidden');
    mealList.classList.remove('hidden');
    startButton.textContent = `Show other options`;
}

function resetApp(){
    mealList.innerHTML = "";
    headline.textContent = `Who Needs Food?`;
    tagline.textContent = `Select or Enter Another User`;
    resetButton.classList.add('hidden');
    startButton.classList.add('hidden');
    loginButton.classList.remove('hidden');
    newButton.classList.remove('hidden')
    userList.classList.add('hidden');
    planDiv.classList.add('hidden');
}


// EVENT LISTENERS

//Buttons 
btnContainer.addEventListener('click', (e) => {
    if(e.target.id == "newUser"){
        createUser(prompt('Please Enter your name'));
    }
    else if(e.target.id == "loginButton"){
        showUserList();
        resetButton.classList.remove('hidden');
        newButton.classList.add('hidden');
    }
    else if(e.target.id == "startButton"){
        showPlan();
        resetButton.classList.remove('hidden')
    }
    else if(e.target.id == "resetButton"){
        resetApp()
    }

});

// User Select
userList.onclick = (e) => {
    user = e.target.textContent;
    userList.classList.add('hidden');
    showStartScreen(user, getDay());
}





