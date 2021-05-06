'use strict';

//console.log('Welcomes user to webpage.');

let amountCorrect = 0;

let userName = prompt('Greetings! I hope you are well. What is your name?');

let ageQuestion = prompt('Hello there ' + userName + '! Welcome to my webpage. How old do you think I am? Please enter in a number (Hint: It\'s between 20 and 30).');

// Prompts the user for a question

if (ageQuestion === '24') {
  amountCorrect++;
  //console.log('That is correct, great guessing!');
  alert('That is correct, great guessing!');
}
else {
  //console.log('So close! Thanks for trying :), I am 24.');
  alert('So close! Thanks for trying :), I am 24.');
}

let birthdayQuestion = prompt('Second question - In what month was I born?');

birthdayQuestion = birthdayQuestion.toLowerCase();

if (birthdayQuestion === 'dec' || birthdayQuestion === 'december') {
  amountCorrect++;
  //console.log('Amazing! You are correct. I was born on December 6th, 1996');
  alert('Amazing! You are correct. I was born on December 6th, 1996');
}
else {
  //console.log('So close!, I was born in December.');
  alert('So close!, I was born in December.');
}

let sportQuestion = prompt('Third question - What sport did I play while growing up?');

sportQuestion = sportQuestion.toLowerCase();

switch(sportQuestion) {
case 'hockey':
  amountCorrect++;
  //console.log('That is correct! I played Hockey for 10 years growing up - both on ice and roller blades. I also played a bit of baseball.');
  alert('That is correct! I played Hockey for 10 years growing up - Both on ice and roller blades. I also played a bit of baseball.');
  break;
case 'baseball':
  amountCorrect++;
  //console.log('I did play some baseball growing up, however hockey was my main sport.');
  alert('I did play some baseball growing up, however hockey was my main sport.');
  break;
default:
  console.log('I did not play ' + sportQuestion + ', unfortunately. The two sports I grew up playing were Hockey and Basebell.');
  break;
}

let languageQuestion = prompt('Fourth question - How many languages do I speak? Please answer in number format.');

languageQuestion = languageQuestion.toLowerCase();

if (languageQuestion === '2') {
  amountCorrect += 1;
  //console.log('You are correct! I speak Spanish as well as English, of course.');
  alert('You are correct! I speak Spanish as well as English, of course.');
}
else {
  //console.log('Good guess! I speak two languages - Spanish and English.');
  alert('Good guess! I speak two languages - Spanish and English.');
}

let animalQuestion = prompt('Last question - Can you guess my favorite animal? Hint: it\'s a reptile.');

animalQuestion = animalQuestion.toLowerCase();

if (animalQuestion === 'turtle') {
  amountCorrect ++;
  //console.log('Correct. I have owned a turtle for most of my life and enjoy their laid-back lifestyle.');
  alert('Correct. I have owned a turtle for most of my life and enjoy their laid-back lifestyle.');
}
else {
  //console.log('While I probably like ' + animalQuestion + ' as well, my favorite animal is the turtle. I enjoy their resilience and laid-back lifestyle.');
  alert('While I probably like ' + animalQuestion + ' as well, my favorite animal is the turtle. I enjoy their resilience and laid-back lifestyle.');
}


console.log('creating variable named myAnswer for the answer to the numbers question.');
let myAnswer = 2;

console.log('creating variable named countDown for the amount of guesses left for the user as well as decrementing a counter for the while loop.');
let countDown = 4;

console.log('pre-initializing num for the while loop. Not entirely sure if necessary.');

for (let i = 0; i < 4; i++) {

  let num = prompt('Try to guess my number between 1 and 10, you have ' + countDown + ' guesses left. Please answer in number format.');

  if (num > myAnswer) {
    alert('Not quite, try guessing lower.');
    countDown--;
    console.log('Decrementing Countdown.');
  }
  else if (num < myAnswer) {
    alert('Not quite, try guessing higher.');
    countDown--;
    console.log('Decrementing Countdown.');
  }
  else {
    amountCorrect++;
    break;
  }
}

alert('Thanks for guessing, ' + userName +', the number was ' + myAnswer + '!');

console.log('initializing artists');
let artists = [
  'prince',
  'dolly parton',
  'amy winehouse',
  'micheal jackson'
  'chet atkins',
  'lady gaga',
  'freddie mercury',
  'joni mitchell',
  'frank sinatra',
  'jimi hendrix'];

function isAnswer(artistAnswer) {
  for (let a = 0; a < 10; a++) {
    if (artistAnswer.toLowerCase() === artists[a]) {
      console.log('Correct Artist');
      return true;
    }
  }
  console.log('Artist not found if at the end of the for loop.');
  alert('Artist not found on my list..try again.');
  return false;
}

for (let a = 0; a < 7; a++) {
  let artistAnswer = prompt('Can you guess an American music artist in my top ten list?');
  if (isAnswer(artistAnswer) === true) {
    alert('You found an artist on my list. Congrats!');
    amountCorrect++;
    break;
  }
}

alert('Thank you very much for answering my questions, correct answers for the artists were ' + artists[0] + ', ' + artists[1] + ', ' + artists[2] +', ' + artists[3] + ',' + artists[4] + ', '
  + artists[5] + ', ' + artists[6] + ', ' + artists[7] + ', ' + artists[8] + ', ' + artists[9] + '. Also - you got ' + amountCorrect + ' out of 7 answers correct! Thanks for your time, ' + userName + '.');








