let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');


function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('userName', myName);
  myHeading.textContent = 'Hello, ' + myName + '.';
}

if (localStorage.getItem('userName') == 'null') {
  setUserName();
} else {
  let storedName = localStorage.getItem('userName');
  myHeading.textContent = 'Hello, ' + storedName + '.';
}

myButton.onclick = function() {
  setUserName()
}
