
// REMAKE THIS FROM SCRATCH WITH CALLS TO GET THE WORDS 
// TIMER CALCULATOR AND STUFF
// remember one step at a time - > the css and html styling can come last to an extent 

const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')
const wpmElement = document.getElementById('wpm')
const caseElement = document.getElementById('slider')
const correctElement = document.getElementById('correctChar')
const incorrectElement = document.getElementById('incorrectChar')
const gwpmElement = document.getElementById('gwpm')

const accElement = document.getElementById('acc')


const buttElement = document.getElementById('case-button')


const modingElement = document.getElementById('moding')
//const accElement = document.getElementById('acc')


//const words = require('data.json');
//console.log(words[1]);


var words = ['be', 'and', 'of', 'a', 'in', 'to', 'have', 'too', 'it', 'I', 'that', 'for', 'you', 'he', 'with', 'on', 'do', 'say', 'this', 'they', 'at', 'but', 'we', 'his', 'from', 'that', 'not', 'can’t', 'won’t', 'by', 'she', 'or', 'as', 'what', 'go', 'their', 'can', 'who', 'get', 'if', 'would', 'her', 'all', 'my', 'make', 'about', 'know', 'will', 'as', 'up', 'one', 'time', 'there', 'year', 'so', 'think', 'when', 'which', 'them', 'some', 'me', 
'people', 'take', 'out', 'into', 'just', 'see', 'him', 'your', 'come', 'could', 'now', 'than', 'like', 'other', 'how', 'then', 'its', 'our', 'two', 'more', 'these', 'want', 'way', 'look', 'first', 'also', 'new', 'because', 'day', 'more', 'use', 'no', 'man', 'find', 'here', 'thing', 'give', 'many', 'well', 'only', 'those', 'tell', 'one', 'very', 'her', 'even', 'back', 'any', 'good', 'woman', 'through', 'us', 'life', 'child', 'there', 'work', 'down', 'may', 'after', 'should', 'call', 'world', 'over', 'school', 'still', 'try', 'in', 'as', 'last', 'ask', 'need', 'too', 'feel', 'three', 'when', 'state', 'never', 'become', 'between', 'high', 'really', 
'something', 'most', 'another', 'much', 'family', 'own', 'out', 'leave', 'put', 'old', 'while', 'mean', 'on', 'keep', 'student', 'why', 'let', 'great', 'same', 'big', 'group', 'begin', 'seem', 'country', 'help', 'talk', 'where', 'turn', 'problem', 'every', 'start', 'hand', 'might', 'American', 'show', 'part', 'about', 'against', 'place', 'over', 'such', 'again', 'few', 'case', 'most', 'week', 'company', 'where', 'system', 'each', 'right', 'program', 'hear', 'so', 'question', 'during', 'work', 'play', 'government', 'run', 'small', 'number', 'off', 'always', 'move', 'like', 'night', 'live', 'Mr.', 'point', 'believe', 'hold', 'today', 'bring', 'happen', 'next', 'without', 'before', 'large', 'all', 'million', 'must', 'home', 'under', 'water', 'room', 'write', 'mother', 'area', 'national', 'money', 'story', 'young', 'fact', 'month', 'different', 'lot', 'right', 'study', 'book', 'eye', 'job', 'word', 'though', 'business', 'issue', 'side', 'kind', 'four', 'head', 'far', 'black', 'long', 'both', 'little', 'house', 'yes', 'after', 'since', 'long', 'provide', 'service', 'around', 'friend', 'important', 'father', 'sit', 'away', 'until', 'power', 'hour', 'game', 'often', 'yet', 'line', 'political', 'end', 'among', 'ever', 'stand', 'bad', 'lose', 'however', 'member', 'pay', 'law', 'meet', 'car', 'city', 'almost', 'include', 'continue', 'set', 'later', 'community', 'much', 'name', 'five', 'once', 'white', 'least', 'president', 'learn', 'real', 'change', 'team', 'minute', 'best', 'several', 'idea', 'kid', 'body', 'information', 'nothing', 'ago', 'right', 'lead', 'social', 'understand', 'whether', 'back', 'watch', 'together', 'follow', 'around', 'parent', 'only', 'stop', 'face', 'anything', 'create', 'public', 'already', 'speak', 
'others', 'read', 'level', 'allow', 'add', 'office', 'spend', 'door', 'health', 'person', 'art', 'sure', 'such', 'war', 'history', 'party', 'within', 'grow', 'result', 'open', 'change', 'morning', 'walk', 'reason', 'low', 'win', 'research', 'girl', 'guy', 'early', 'food', 'before', 'moment', 'himself', 'air', 'teacher', 'force', 'offer', 'enough', 'both', 'education', 'across', 'although', 'remember', 'foot', 'second', 'boy', 'maybe', 'toward', 'able', 'age', 'off', 'policy', 'everything', 'love', 'process', 'music', 'including', 'consider', 'appear', 'actually', 'buy', 'probably', 'human', 'wait', 'serve', 'market', 'die', 'send', 'expect', 'home', 'sense', 'build', 'stay', 'fall', 'oh', 'nation', 'plan', 'cut', 'college', 'interest', 'death', 'course', 'someone', 'experience', 'behind', 'reach', 'local', 'kill', 'six', 'remain', 'effect', 'use', 'yeah', 'suggest', 'class', 'control', 'raise', 'care', 'perhaps', 'little', 'late', 'hard', 'field', 'else', 'pass', 'former', 'sell', 'major', 'sometimes', 'require', 'along', 'development', 'themselves', 'report', 'role', 'better', 'economic', 'effort', 'up', 'decide', 'rate', 'strong', 'possible', 'heart', 'drug', 'show', 'leader', 'light', 'voice', 'wife', 'whole', 'police', 'mind', 'finally', 'pull', 'return', 'free', 'military', 'price', 'report', 'less', 'according', 'decision', 'explain', 'son', 'hope', 'even', 'develop', 'view', 'relationship', 'carry', 'town', 'road', 'drive', 'arm', 'true', 'federal', 'break', 'better', 'difference', 'thank', 'receive', 'value', 'international', 'building', 'action', 'full', 'model', 'join', 'season', 'society', 'because', 'tax', 'director', 'early', 'position', 'player', 'agree', 'especially', 'record', 'pick', 'wear', 'paper', 'special', 'space', 'ground', 'form', 'support', 'event', 'official', 'whose', 'matter', 'everyone', 'center', 'couple', 'site', 'end', 'project', 'hit', 'base', 'activity', 'star', 'table', 'need', 'court', 'produce', 'eat', 'American', 'teach', 'oil', 'half', 'situation', 'easy', 'cost', 'industry', 'figure', 'face', 'street', 'image', 'itself', 'phone', 'either', 'data', 'cover', 'quite', 'picture', 'clear', 'practice', 'piece', 'land', 'recent', 'describe', 'product', 'doctor', 'wall', 'patient', 'worker', 'news', 'test', 'movie', 'certain', 'north', 'love', 'personal', 'open', 'support', 'simply', 'third', 'technology', 'catch', 'step', 'baby', 'computer', 'type', 'attention', 'draw', 'film', 'Republican', 'tree', 'source', 'red', 'nearly', 'organization', 'choose', 'cause', 'hair', 'look', 'point', 'century', 'evidence', 'window', 'difficult', 'listen', 'place', 'single', 'rule', 'daughter', 'administration', 'south', 'husband', 'Congress', 'floor', 'campaign', 'material', 'population', 'well', 'call', 'economy', 'medical', 'hospital', 'church', 'close', 'thousand', 'risk', 'current', 'fire', 'future', 'wrong', 'involve', 'defense', 'anyone', 'increase', 'security', 'bank', 'myself', 'certainly', 'west', 'sport', 'board', 'seek', 'per', 'subject', 'officer', 'private', 'rest', 'behavior', 'deal', 'performance', 'fight', 'throw', 'top', 'quickly', 'past', 'goal', 'second', 'bed', 'order', 'author', 'fill', 'represent', 'focus', 'foreign', 'drop', 'plan', 'blood', 'upon', 'agency', 'push', 'nature', 'color', 'no', 'recently', 'store', 'reduce', 'sound', 'note', 'fine', 'before', 'near', 'movement', 'page', 'enter', 'share', 'than', 'common', 'poor', 'other', 'natural', 'race', 'concern', 'series', 'significant', 'similar', 'hot', 'language', 'each', 'usually', 'response', 'dead', 'rise', 'animal', 'factor', 'decade', 'article', 'shoot', 'east', 'save', 'seven', 'artist', 'away', 'scene', 'stock', 'career', 'despite', 'central', 'eight', 'thus', 'treatment', 'beyond', 'happy', 'exactly', 'protect', 'approach', 'lie', 'size', 'dog', 'fund', 'serious', 'occur', 'media', 'ready', 'sign', 'thought', 'list', 'individual', 'simple', 'quality', 'pressure', 'accept', 'answer', 'hard', 'resource', 'identify', 'left', 'meeting', 'determine', 'prepare', 'disease', 'whatever', 'success', 'argue', 'cup', 'particularly', 'amount', 'ability', 'staff', 'recognize', 
'indicate', 'character', 'growth', 'loss', 'degree', 'wonder', 'attack', 'herself', 'region', 'television', 'box', 'TV', 'training', 'pretty', 'trade', 'deal', 'election', 'everybody', 'physical', 'lay', 'general', 'feeling', 'standard', 'bill', 'message', 'fail', 'outside', 'arrive', 'analysis', 'benefit', 'name', 'sun', 'forward', 'lawyer', 'present', 'section', 'environmental', 'glass', 'answer', 'skill', 'sister', 'PM', 'professor', 'operation', 'financial', 'crime', 'stage', 'ok', 'compare', 'authority', 'miss', 'design', 'sort', 'one', 'act', 'ten', 'knowledge', 'gun', 'station', 'blue', 'state', 'strategy', 'little', 'clearly', 'discuss', 
'indeed', 'force', 'truth', 'song', 'example', 'democratic', 'check', 'environment', 'leg', 'dark', 'public', 'various', 'rather', 'laugh', 'guess', 'executive', 'set', 'study', 'prove', 'hang', 'entire', 'rock', 'design', 'enough', 'forget', 'since', 'claim', 'note', 'remove', 'manager', 'help', 'close', 'sound', 'enjoy', 'network', 'legal', 'religious', 'cold', 'form', 'final', 'main', 'science', 'green', 'memory', 'card', 'above', 'seat', 'cell', 'establish', 'nice', 'trial', 'expert', 'that', 'spring', 'firm', 'Democrat', 'radio', 'visit', 'management', 'care', 'avoid', 'imagine', 'tonight', 'huge', 'ball', 'no', 'close', 'finish', 'yourself', 'talk', 'theory', 'impact', 'respond', 'statement', 'maintain', 'charge', 'popular', 'traditional', 'onto', 'reveal', 'direction', 'weapon', 'employee', 'cultural', 'contain', 'peace', 'head', 'control', 'base', 'pain', 'apply', 'play', 'measure', 'wide', 'shake', 'fly', 'interview', 'manage', 'chair', 'fish', 'particular', 'camera', 'structure', 'politics', 'perform', 'bit', 'weight', 'suddenly', 'discover', 'candidate', 'top', 'production', 'treat', 'trip', 'evening', 'affect', 'inside', 'conference', 'unit', 'best', 'style', 'adult', 'worry', 'range', 'mention', 'rather', 'far', 'deep', 'front', 'edge', 'individual', 'specific', 'writer', 'trouble', 'necessary', 'throughout', 'challenge', 'fear', 'shoulder', 'institution', 'middle', 'sea', 'dream', 'bar', 'beautiful', 'property', 'instead', 'improve', 'stuff', 'claim'];


var nounverb = [];

var quote = 

modingElement.disabled = true;
//maybe change these to let variables
var correct = 0;
var incorrect = 0; 
var currentQuote = '';
var spaceCount = 0;


var correctChar = 0;
var incorrectChar = 0;


var correctWords = 0;
var incorrectWords = 0;


var timeLimit = 60;
var lengthLimit = 350;


var timeState = false;

var flag;
// maybe add an array eventually that allows for more data of incorrect words and analyzing their meaning 


//-------------------------------------
// init values of stats 
timerElement.innerHTML = 60 + 's';
wpmElement.innerHTML = '00 ' + 'WPM  ';
gwpmElement.innerHTML = '00 ' + 'gWPM';
accElement.innerHTML = '00.0% ' + 'acc';

correctElement.innerHTML = 'incorrect chars: 00';
incorrectElement.innerHTML = 'correct chars: 00';


console.log(words.length);

//var fs = require('fs');
//var obj = JSON.parse(fs.readFileSync('data.json', 'utf8'));
//var student = JSON.parse(rawdata);
//console.log(student);
/* function getText() { 
  fetch('data.json')
  .then(response => response.json())
  .then(lol => {
    //console.log(lol)
  })
  .catch(error => console.error(error));
  

} */
//getText();

/* function getRandomQuote() {
  const data = fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data => data.content)
  //currentQuote = data.toString().split(' ');
  return data;

} */

// move some of this to reset
function timeChange(){
  reset();
}

function modeChange(){
  reset();
}

function lengthChange(){
  reset();
}

function checkBox(){
  reset();
}


function scramble(){
  if (flag == true){
    flag = false;
  }
  else{ 
    flag = true; 
  }
  reset();
}






function theFunction(){
  console.log("lol");
  document.body.style.background = color;

}


var white = false
var bgcolor;
$(document).ready(function () {
    $("case-button").click(function () {
        if (white = !white) {
            bgcolor = $(this).css('backgroundColor');
            $(this).css("background-color", "#FFF");
        } else {
            $(this).css("background-color", bgcolor);
        }
    });
});


var input;
var state; 


var mode; 
var time;
var words;
/*Dropdown Menu*/


function focusOnMe(){
  quoteInputElement.focus();
}

function makeSentence(){
  console.log(lengthLimit);
  var length = lengthLimit;
  var word_list = [];
  var i = 0;

  while (i < length){
    random_number = (Math.floor(Math.random() * 1000) + 1);
    console.log(random_number);
    if (words[random_number] == undefined){
      i--;
    }
    else if (words[random_number].length >= 5 && i % 4 == 0){
      i--;
    }
    else{ 
      word_list.push(words[random_number].toLowerCase());
    }
    i++;
  }

  currentQuote = word_list;
  //console.log(word_list);
  //console.log(word_list);
  console.log(currentQuote);
  return(word_list);
  

}


function setList(e) {
  currentQuote = e;
}

// add random func that can capitalize random words in the phrasing 
function capWords(e){ 
  capList = [];
  //andom_number = (Math.floor(Math.random() * 5) + 1);
  
  //console.log(e);
  for (var i = 0; i < e.length; i++){
    var cap;
    random_number = (Math.floor(Math.random() * 5) + 1);
    //console.log(random_number);
    //capList.push(e[i])
    //console.log(e)
    //for (var y = 0; y < e[i].length; y++){
    try{
      random_number2 = (Math.floor(Math.random() * (e[i].length)) + 1);
      //console.log(random_number2);
      random_number3 = (Math.floor(Math.random() * random_number2) + 1);
      if (random_number == 2 || random_number == 3 || random_number == 4){
        cap = e[i].slice(0, random_number3) + e[i].slice(random_number3, random_number2).toUpperCase() + 
        e[i].slice(random_number2, e[i].length);
      }
      else{
        cap = e[i];
      }
    }
    catch (TypeError){
    }
    capList.push(cap);
  }

    //random_number = (Math.floor(Math.random() * 5) + 1);
    //random_number2 = (Math.floor(Math.random() * 3) + 1);
  //console.log(random_number);
  //console.log(random_number2); 
  //}
  console.log(capList);
  currentQuote = capList;
}

//var capList = capWords(makeSentence());

makeSentence();



/* async function renderNewQuote() {
  const quote = makeSentence()
  quoteDisplayElement.innerHTML = ' '
  quote.forEach(character => {
    const characterSpan = document.createElement('span')
    characterSpan.innerText = character + " "
    quoteDisplayElement.appendChild(characterSpan)
  })
  quoteInputElement.value = null;
}

renderNewQuote() */

function renderText() {
  currentQuote.forEach(word => {
    let span = document.createElement('span');
    //console.log(span)
    span.innerHTML = ' ' + word;
    
    quoteDisplayElement.appendChild(span);
  });
  quoteDisplayElement.firstChild.classList.add('highlight');
}



 
function setCount() {
  spaceCount++;
}

function setCorrect() {
  correctWords++; 
}

function setCorrectWords() {
  correctChar++; 
}

function setIncorrect() { 
  incorrectChar++;
}

let oldDate; 
let newDate;
var goodList = [];
var badList = [];




function analysis() { 
}



function renderResults() { 
  var wpm = 0;
  var gwpm = 0;
  var acc = 0;

  var elapsed = (newDate - oldDate) / 1000;
  console.log(elapsed);
  var accuracy = correctWords / currentQuote.length;
  var good = 0;
  var bad = 0;

  for (var i = 0; i < goodList.length; i++){
    good += goodList[i].length;
  }
  for (var i = 0; i < badList.length; i++){
    bad += badList[i].length;
  }

  if (mode == 'timed'){
    if (timeLimit == 60) {

      // possibly get rid of this and just use the elapsed method so no more cases required
      wpm = (((good + bad) / 5) / 1) - ((bad / 5) / 1);
      gwpm = ((good + bad) / 5 / 1);
    }
    else if (timeLimit == 30){
      wpm = (((good + bad) / 5) / 0.5) - ((bad / 5) / 0.5);
      gwpm = ((good + bad) / 5 / 0.5);
    }
    else{
      wpm = (((good + bad) / 5) / (1 / 6)) - ((bad / 5) / (1 / 6));
      gwpm = ((good + bad) / 5 / (1 / 6));
    }
  }
  else if (mode == 'burst'){
    wpm = (((good + bad) / 5) / (elapsed / 60)) - ((bad / 5) / (elapsed / 60));
    gwpm = ((good + bad) / 5 / (elapsed / 60));
  }

  acc = (good / (good + bad)) * 100;
  console.log("the wpm is " + wpm)
  wpmElement.innerHTML = wpm.toFixed(0) +  ' WPM';
  gwpmElement.innerHTML = gwpm.toFixed(0) + ' gWPM';
  accElement.innerHTML = acc.toFixed(1) + '% acc';
  correctElement.innerHTML = 'incorrect chars: ' + bad;
  incorrectElement.innerHTML = 'correct chars: ' + good;
}

function scrollText() {

}


//clean up the var names here
// create a switch or if statement based on the mode 



// to show live wpm add a line here as it updates 
var myTimer;
   function clock() {
     myTimer = setInterval(myClock, 1000);
     var c = timeLimit;
     function myClock() {
       if (c <= 10){
         timerElement.innerHTML = '0' + --c + 's';
       }

       else{
        timerElement.innerHTML = --c + 's';
       }
       
       // need to figure out the fading on the clock here maybe?
      // timerElement.classList.remove('hide')
       //wpmElement.innerHTML = 'WPM: ' + goodChar;
       if (c == 0) {
         clearInterval(myTimer);
         timerElement.innerHTML = '00';
         quoteInputElement.disabled = true;
         renderResults();
       }
     }
   }
  
function stopClock(){

  clearInterval(myTimer);
}

// need to make c the time when the words are done (potentially send true and false to it )
// so once the words are through you call up the false 
var myTimer2;
var state = true;
   function clockup() {
     myTimer2 = setInterval(myClockup, 1000);
     var c = 0;
     function myClockup() {
       timerElement.innerHTML = ++c + 's';
       //wpmElement.innerHTML = 'WPM: ' + goodChar;
       if (spaceCount == currentQuote.length) {
        clearInterval(myTimer2);
        quoteInputElement.disabled = true;
        renderResults();
     }
   }
  }



// add a variation of that clock 



//need to count the total characters 
var totalChar = 0;
var goodChar = 0;
var firstLetter = currentQuote[0][0];
mode = 'timed';



quoteInputElement.addEventListener('keydown', e => {
  totalChar++;

  //doesnt work if the first letter is wrong lol 
  // need a better way of detecting first keypress 
  if ((spaceCount == 0) && (totalChar == 1) && (mode == 'timed' || mode == 'quote')) {
  //if ((spaceCount == 0) && (e.key == firstLetter)) {
    
    console.log(oldDate);
    //startTimer();
    clock();
    // subtract the date time and if it's 10 seconds then lol
  }  
  else if ((spaceCount == 0) && (totalChar == 1) && (mode == 'burst')){
    oldDate = Date.now();
    console.log(oldDate);
  }
  var str1 = quoteInputElement.value;
  var str2 = quoteDisplayElement.childNodes[spaceCount].innerText;
  try{
    var match = str2.match(str1);
  }
  catch(SyntaxError){

  }

 // if (quoteInputElement.value == ''){
 //   quoteDisplayElement.childNodes[spaceCount].classList.add('incorrect');
 // }

 // need to add better detection if using ctrl + a 

  if (match == null) {
    quoteDisplayElement.childNodes[spaceCount].classList.add('highlight-red');
  }
  else { 
    quoteDisplayElement.childNodes[spaceCount].classList.remove('highlight-red');
  }
  
  if (e.key == ' ') {
    event.preventDefault();
    //  the timed version and the word limit version both need scroll like this 
    try{
      if (quoteDisplayElement.childNodes[spaceCount + 1].offsetTop > quoteDisplayElement.childNodes[spaceCount].offsetTop){
        // change if the max width of container is changing 
        if ((currentQuote.length - spaceCount) < 10){ 
        }
        else{
          var newOffset = quoteDisplayElement.childNodes[spaceCount + 1].offsetTop - quoteDisplayElement.childNodes[spaceCount].offsetTop;
          quoteDisplayElement.scrollBy({
            top: newOffset,
            left: 0,
            behavior: 'smooth'
          });
        }
      }
    }
    catch (TypeError){  
    }
    if (quoteInputElement.value == '') {
      quoteInputElement.value = '';
    }
    else if (quoteInputElement.value != '') {
      try{
        quoteDisplayElement.childNodes[spaceCount + 1].classList.add('highlight');
      }
      catch (TypeError){
      }
      if (quoteInputElement.value.trim() == currentQuote[spaceCount]){
        quoteDisplayElement.childNodes[spaceCount].classList.remove('highlight-red');
        quoteDisplayElement.childNodes[spaceCount].classList.remove('highlight');
        quoteDisplayElement.childNodes[spaceCount].classList.add('correct');
        goodList.push(currentQuote[spaceCount]);
        setCorrectWords();
      }
      else if (quoteInputElement.value.trim() != currentQuote[spaceCount]){
        quoteDisplayElement.childNodes[spaceCount].classList.remove('highlight-red');
        quoteDisplayElement.childNodes[spaceCount].classList.remove('highlight');
        quoteDisplayElement.childNodes[spaceCount].classList.add('incorrect');
        badList.push(currentQuote[spaceCount]);
      }
      quoteInputElement.value = '';
      setCount();
      if (spaceCount == currentQuote.length) {
        newDate = Date.now();
        renderResults();
        console.log(newDate);
      }
    }
  }
})


var wordNum;
document.getElementById('drop3').classList.add('mask');
$('.dropdown').click(function () {
  // need to add a check here to that it focuses on thsi specifically 
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(250);
});

$('.dropdown').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(250);
});
$('.dropdown .dropdown-menu li').click(function () {
  $(this).parents('.dropdown').find('span').text($(this).text());
  $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/
$('.dropdown-menu li').click(function () {
  input = $(this).parents('.dropdown').find('input').val();
  if (input == 'burst' || input == 'timed' || input == quote){
    mode = input; 
  }
  else if (input == '10' || input == '30' || input == '60'){
    time = input;
  }
  else if (input == '10 words' || input == '50 words' || input == '200 words'){
    wordNum = input;
  }
  stopClock();
  if (mode == 'burst' ){
    lengthLimit = 10;
    reset();
    timerElement.innerHTML = '///';
    document.getElementById('drop3').classList.remove('mask');
    document.getElementById('drop2').classList.add('mask');

    if (wordNum == '10 words'){
      lengthLimit = 10;
      reset();
    }
    else if (wordNum == '50 words'){
      lengthLimit = 50;
      reset();
    }
    else if (wordNum == '200 words'){
      lengthLimit = 200;
      reset();
    }
  
  }
  else if (mode == 'timed') {
    document.getElementById('drop2').classList.remove('mask');
    document.getElementById('drop3').classList.add('mask');
    if (typeof time == 'undefined'){
      timeLimit = 60;
    }
    else{
      timeLimit = parseInt(time);
    }
    lengthLimit = 350;
    reset();
    timerElement.innerHTML = timeLimit + 's'

  }
//$(this).find('.dropdown-menu').slideToggle(250);
}); 


// variables need more cleanup
function reset(){
  stopClock();
  if (mode == 'burst'){
    timerElement.innerHTML = '///';
  }
  else{
    timerElement.innerHTML = timeLimit + 's'
  }
  // need to fix this 
  
  correct = 0;
  incorrect = 0; 
  currentQuote = '';
  spaceCount = 0;
  correctChar = 0;
  incorrectChar = 0;
  correctWords = 0; 
  incorrectWords = 0;
  totalChar = 0;
  goodChar = 0;
  goodList = [];
  badList = [];
  quoteInputElement.disabled = false;
  quoteInputElement.value = '';
  quoteDisplayElement.innerHTML = '';
  wpmElement.innerHTML = '00 ' + 'WPM  ';
  gwpmElement.innerHTML = '00 ' + 'gWPM';
  accElement.innerHTML = '00.0% acc';

  incorrectElement.innerHTML = 'incorrect chars: 00';
  correctElement.innerHTML = 'correct chars: 00';
  //quoteDisplayElement.scrollTo(0,0);
 //add fade animation to replace text instead of this or figure out to make it scroll up 
  quoteDisplayElement.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  if (flag == true){
    capWords(makeSentence()); 
  } 
  else {
    makeSentence();
  }
  renderText();
}



renderText();


