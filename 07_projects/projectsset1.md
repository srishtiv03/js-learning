# Projects related to DOM

## project link
[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 1

``` javascript 
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
  button.addEventListener('click', function (e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === "grey"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "white"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "blue"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "yellow"){
      body.style.backgroundColor = e.target.id
    }
  })
})
```

## project 2

``` javascript
const form = document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please enter a valid height ${height}`
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please enter a valid weight ${weight}`
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)

    let message = ''
    if(bmi < 18.6){
      message = `${bmi} - Under Weight`
    }
    else if(bmi >= 18.6 && bmi <= 24.9){
      message = `${bmi} - Normal Range`
    }
    else{
      message = `${bmi} - Overweight`
    }
    results.innerHTML = `<span>${message}</span>`
  }
})
```

## project 3

```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```

## project 4

```javascript
let randomNumber = parseInt(Math.random()*100 + 1)
// console.log(randomNumber)

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 0

let playGame = true

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert(`Please enter a valid input.`)
  }
  else if(guess < 1){
    alert(`Please enter a number greater than 1.`)
  }
  else if(guess > 100){
    alert(`Please enter a number less than 100.`)
  }
  else{
    prevGuess.push(guess)
    displayGuess(guess)
    checkGuess(guess)
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it right!`)
    endGame()
  }
  else if(guess < randomNumber){
    displayMessage('The number is low.')
  }
  else if(guess > randomNumber){
    displayMessage('The number is high.')
  }

  if(numGuess === 10){
    displayMessage(`Game Over :( Random Number was ${randomNumber}.`);
    endGame();
  }
}

function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess ++;
  remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e){
    playGame = true;
    randomNumber = parseInt(Math.random()*100 + 1);
    prevGuess = [];
    numGuess = 0;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess}`;
  })
}
```

## project 5

``` javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class = 'color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === "" ? "Space" : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
    </table>
    </div>
  `;
});
```

## project 6

``` javascript
// generate a random colour

const randomColor = function(){
  const hex = '0123456789ABCDEF';
  let color = "#";
  for(let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(Math.floor(Math.random() * 16))

let intervalId;
const startChangingColor = function(){
  // intervalId = setInterval(changeBgColor, 1000);
  // better practice to write it as follows
  if(!intervalId){
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
  }
}

const stopChangingColor = function(){
  clearInterval(intervalId);
  intervalId = null; // it is a good practice to put the value null when they're are not being used since we have been overwriting intervalId
}

document.querySelector("#start").addEventListener('click', startChangingColor);

document.querySelector("#stop").addEventListener('click', stopChangingColor);
```
