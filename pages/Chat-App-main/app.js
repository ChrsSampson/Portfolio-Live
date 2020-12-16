const chatHistory = document.querySelector('.chat-history');
const sendBtn = document.querySelector('#send')
const userInput = document.querySelector('#user-input')

//Add user message to chat history
sendBtn.addEventListener('click', () =>{
    chatHistory.innerHTML += `
    <div class="message">
    <h4 class="username">User:</h4>
    <span>${userInput.value}</span><br>
    </div>`;
    userInput.value = '';
});

//generate contact list from list of strings
const contacts = [
    "George Washington",
    "John Adams",
    "Thomas Jefferson",
    "James Madison",
    "James Monroe",
    "John Quincy Adams",
    "Andrew Jackson",
    "Martin Van Buren",
    "William Henry Harrison",
    "John Tyler",
    "James K. Polk",
    "Zachary Taylor",
    "Millard Fillmore",
    "Franklin Pierce",
    "James Buchanan",
    "Abraham Lincoln",
    "Andrew Johnson",
    "Ulysses S. Grant",
    "Rutherford B. Hayes",
    "James Garfield",
    "Chester A. Arthur",
    "Grover Cleveland",
    "Benjamin Harrison",
    "Grover Cleveland",
    "William McKinley",
    "Theodore Roosevelt",
    "William Howard Taft",
    "Woodrow Wilson",
    "Warren G. Harding",
    "Calvin Coolidge",
    "Herbert Hoover",
    "Franklin D. Roosevelt",
    "Harry S. Truman",
    "Dwight D. Eisenhower",
    "John F. Kennedy",
    "Lyndon B. Johnson",
    "Richard M. Nixon",
    "Gerald R. Ford",
    "James Carter",
    "Ronald Reagan",
    "George H. W. Bush",
    "William J. Clinton",
    "George W. Bush",
    "Barack Obama",
    "Donald J. Trump",
];

for(let i = 0; i < contacts.length; i++){
    const ul = document.querySelector('.contact-list')
    let li = document.createElement('li');
    li.textContent = contacts[i];
    ul.appendChild(li);
}