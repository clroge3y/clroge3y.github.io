//variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
let missed = 0;
const overlay = document.getElementById('overlay');
const heart = document.querySelectorAll('img')
const button = document.getElementsByTagName('button');

//arrays
const phrases = [
  'look at all those chickens',
  'more like hurricane tortilla',
  'chipotle is my life',
  'i smell like beef',
  'freeshavacado'
];

//add event listener to start button
startButton.addEventListener('click', () => {
		overlay.style.display = 'none';
});

//Create a getRandomPhraseAsArray function.
function getRandomPhraseAsArray(arr) {
	return phrases[Math.floor(Math.random() * arr.length)].split('');
}
randomPhrase = getRandomPhraseAsArray(phrases);

//Create an addPhraseToDisplay function.
function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let li = document.createElement('li');
    li.textContent = arr[i].toLowerCase();
    phrase.appendChild(li);
    if (li.textContent === ' ') {
      li.className = 'space';
    } else {
      li.className = 'letter';
    }
  }
}

addPhraseToDisplay(randomPhrase);


//Create a checkLetter function
function checkLetter(button) {
  const letter = document.querySelectorAll('li');
  let letterFound = null;
    for (let i=0; i < letter.length; i++) {
      if (button === letter[i].textContent.toLowerCase()) {
        letter[i].classList.add('show');
        letter[i].style.transition = '2s ease';
        letterFound = true;
      }
    };
    return letterFound;
  };

//Add an event listener to the keyboard
qwerty.addEventListener('click', event => {
  if (event.target.tagName === "BUTTON") {
    event.target.className = 'chosen';
    event.target.disabled = true;
    const correct = checkLetter(event.target.textContent.toLowerCase());

    if (correct === null) {
      missed++;
      const lostHeart = 5 - missed;
      const hearts = document.querySelectorAll('img');
      hearts[lostHeart].setAttribute("src","images/lostHeart.png");
    }
    checkWin();
  }
  });

//Create a checkWin function
function checkWin() {
   const letterClass = document.querySelectorAll('.letter');
   const shown = document.querySelectorAll('.show');
   const title = document.querySelector('.title');



 if (letterClass.length === shown.length) {
    overlay.className = 'win';
    title.textContent = 'You Win!';
    overlay.style.display = 'flex';
    //

 } else if (missed >= 5 ) {
   overlay.className = 'lose'
   title.textContent = 'Game Over! Please try again.';
   overlay.style.display = 'flex';
  }
  resetGame();
};

//reset Game Function
function resetGame() {
  startButton.textContent = 'Would you like to play a game?';
  startButton.addEventListener('click', () => {
    location.reload();
  });
};
