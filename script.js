
// REMAKE THIS FROM SCRATCH WITH CALLS TO GET THE WORDS 
// TIMER CALCULATOR AND STUFF
// remember one step at a time - > the css and html styling can come last to an extent 

const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')

//const words = require('data.json');
//console.log(words[1]);


var correct = 0;
var incorrect = 0; 
var currentQuote = '';

function getRandomQuote() {
  const data = fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data => data.content)
  //currentQuote = data.toString().split(' ');
  return data;

}

async function renderNewQuote() {
  const quote = await getRandomQuote()
  //currentQuote = quote.split(' '); 
  //console.log(currentQuote)
  quoteDisplayElement.innerHTML = ''
  
  quote.split('').forEach(character => {
    const characterSpan = document.createElement('span')
    characterSpan.innerText = character
    quoteDisplayElement.appendChild(characterSpan)
  })
  quoteInputElement.value = null;
}


renderNewQuote()


quoteInputElement.addEventListener('keydown', e => {
  if (e.key == ' ') {
    if (quoteInputElement.value != null){
      console.log(quoteInputElement.value);
      if (quoteInputElement.value == currentQuote[1]){
        console.log("a start");
      }


      quoteInputElement.value = null;

    }
  }

})


/*( let startTime
function startTimer() {
  timerElement.innerText = 0
  startTime = new Date()
  setInterval(() => {
    timer.innerText = getTimerTime()
  }, 1000)
} */

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000)
}

