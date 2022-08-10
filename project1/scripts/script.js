console.log('HIIIII');

let myHeading = document.querySelector('h1');
let myBtn = document.querySelector('button');



const myImage = document.querySelector('img');

myImage.addEventListener('click', () => {
    const mySrc = myImage.getAttribute('src');

    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
});

function setUserName() {
    const myName = prompt('Please enter your name');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

myBtn.addEventListener('click', setUserName);