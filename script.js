// Linas Aleknevicius 

const DISP_ELEM = document.getElementById('display')
const INP_ELEM = document.getElementById('input')
const TIME_ELEM = document.getElementById('clock')
const WPM_ELEM = document.getElementById('wpm')
const WPM_NUM_ELEM = document.getElementById('wpmNum')
const CASE_ELEM = document.getElementById('slider')
const CORR_ELEM = document.getElementById('correctChar')
const INCORR_ELEM = document.getElementById('incorrectChar')
const GWPM_ELEM = document.getElementById('gwpm')
const ACC_ELEM = document.getElementById('acc')
const LIVE_WPM_ELEM = document.getElementById('liveWpm')

var displayText = '';
var whitespaceCount = 0;
var correctWhiteSpace = 0;
var correctChar = 0;
var incorrectChar = 0;
var timeLimit = 60;
var lengthLimit = 350;

var input;
var state; 
var mode; 
var time;
var flag;

TIME_ELEM.innerHTML = 60 + 's';
WPM_ELEM.innerHTML = 'WPM  ';
WPM_NUM_ELEM.innerHTML = '--';
GWPM_ELEM.innerHTML = '-- ' + 'gWPM';
ACC_ELEM.innerHTML = '-- % ' + 'acc';
CORR_ELEM.innerHTML = 'correct chars: --';
INCORR_ELEM.innerHTML = 'incorrect chars: --';
LIVE_WPM_ELEM.innerHTML = '--';

function scramble(){
  if (flag == true) {
    flag = false;
  }
  else { 
    flag = true; 
  }
  reset();
}

function focusOnMe() {
  INP_ELEM.focus();
}

function selectQuote() {
  var currentWords = [];
  random_number1 = (Math.floor(Math.random() * Object.keys(quotes).length) + 1);
  quote = quotes[random_number1];
  var i = 0;
  while (i < quote.length){
    currentWords.push(quote[i]);
    i++;
  }
  displayText = currentWords;
  return(currentWords);
}

function makeSentence(){
  var length = lengthLimit;
  var currentWords = [];
  var i = 0;
  while (i < length){
    random_number = (Math.floor(Math.random() * Object.keys(words).length) + 1);
    if (words[random_number] == undefined){
      i--;
    }
    else if (words[random_number].length >= 4 && i % 5 == 0){
      i--;
    }
    else{ 
      currentWords.push(words[random_number].toLowerCase());
    }
    i++;
  }
  displayText = currentWords;
  return(currentWords);
}

function setList(e) {
  displayText = e;
}

var newWords;
function infiniteWords(){
  newWords = displayText;
  var tempWords = []
  var concatWords = []
  if (whitespaceCount == (displayText.length - 70)){ 
    tempWords = makeSentence();
    concatWords = newWords.concat(tempWords);
    if (flag == true){
      capWords(concatWords);
    }
    else{
      displayText = concatWords;
    }
    renderText();
  }
  else{ 
    newWords = makeSentence();
    displayText = newWords;
  }
}

function capWords(e){ 
  capitalWords = [];
  for (var i = 0; i < e.length; i++){
    var cap;
    random_number = (Math.floor(Math.random() * 5) + 1);
    try{
      random_number2 = (Math.floor(Math.random() * (e[i].length)) + 1);
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
    capitalWords.push(cap);
  }
  displayText = capitalWords;
}

makeSentence();

function renderText() {
  displayText.forEach(word => {
    let span = document.createElement('span');
    span.innerHTML = ' ' + word;
    DISP_ELEM.appendChild(span);
  });
  DISP_ELEM.firstChild.classList.add('highlight');
}
 
function setCount() {
  whitespaceCount++;
}

function setCorrectCount(){
  correctWhiteSpace++;
}

var oldDate; 
var newDate;
var goodWords = [];
var badWords = [];
var elapsed;

function renderResults() { 
  var wpm = 0;
  var gwpm = 0;
  var acc = 0;
  elapsed = (newDate - oldDate) / 1000;
  var good = 0;
  var bad = 0;
  for (var i = 0; i < goodWords.length; i++){
    good += goodWords[i].length;
  }
  for (var i = 0; i < badWords.length; i++){
    bad += badWords[i].length;
  }
  if (mode == 'timed'){
    if (timeLimit == 60) {
      wpm = (((good + correctWhiteSpace) / 5) / 1);
      gwpm = ((good + bad + correctWhiteSpace) / 5 / 1);
    }
    else if (timeLimit == 30){
      wpm = (((good + correctWhiteSpace) / 5) / 0.5);;
      gwpm = ((good + bad + correctWhiteSpace) / 5 / 0.5);
    }
    else{
      wpm = (((good + correctWhiteSpace) / 5) / (1 / 6));
      gwpm = ((good + bad + correctWhiteSpace) / 5 / (1 / 6));
    }
  }
  else if (mode == 'burst' || mode == 'quote'){
    wpm = (((good + correctWhiteSpace) / 5) / (elapsed / 60));
    gwpm = ((good + bad + correctWhiteSpace) / 5 / (elapsed / 60));
  }
  acc = ((good + correctWhiteSpace) / (good + bad + correctWhiteSpace)) * 100;
  document.getElementById('stats').classList.add('mask-stats');
  WPM_NUM_ELEM.innerHTML = wpm.toFixed(0);
  GWPM_ELEM.innerHTML = gwpm.toFixed(0) + ' gWPM';
  ACC_ELEM.innerHTML = acc.toFixed(1) + '% acc';
  CORR_ELEM.innerHTML = 'correct chars: ' + (good + correctWhiteSpace);
  INCORR_ELEM.innerHTML = 'incorrect chars: ' + bad;
}

var counter;
   function clock() {
     counter = setInterval(clockConditions, 1000);
     var c = timeLimit;
     function clockConditions() {
       if (c <= 10){
         TIME_ELEM.innerHTML = '0' + --c + 's';
       }
       else{
        TIME_ELEM.innerHTML = --c + 's';
       }
       if (c == 0) {
         stopClock();
         TIME_ELEM.innerHTML = '00s';
         INP_ELEM.disabled = true;
         renderResults();
       }
     }
   }

var secondCounter;
   function clockUp() {
     secondCounter = setInterval(clockConditionsUp, 1000);
     var c = 0;
     function clockConditionsUp() {
        ++c;
        if (c == 1 || c % 2 == 0){
          var liveWpm = 0;
          var goodLive = 0;
          for (var i = 0; i < goodWords.length; i++){
            goodLive += goodWords[i].length;
          }
          // fix counter if over a minute long session
          liveWpm = (((goodLive + correctWhiteSpace) / 5) / (c / 60));
          $(".live-container").fadeOut(200,function(){
            LIVE_WPM_ELEM.innerHTML = liveWpm.toFixed(0) + " WPM";
            $(".live-container").fadeIn(200);
          });
          $(".wpm-stats").fadeOut(200,function(){
            WPM_NUM_ELEM.innerHTML = liveWpm.toFixed(0);
            $(".wpm-stats").fadeIn(200);
          });          
         }
     }
   }

function stopClock(){
  clearInterval(counter);
  clearInterval(secondCounter);
}

var totalChar = 0;
var firstLetter = displayText[0][0];
mode = 'timed';

INP_ELEM.addEventListener('keydown', e => {
  totalChar++;
  if ((whitespaceCount == 0) && (totalChar == 1) && (mode == 'timed')) {
    clock();
    clockUp();
  }  
  else if ((whitespaceCount == 0) && (totalChar == 1) && (mode == 'infinite')) {
    clockUp();
  }  
  else if ((whitespaceCount == 0) && (totalChar == 1) && (mode == 'burst' || mode == 'quote')){
    oldDate = Date.now();
  }
  var innerString = INP_ELEM.value;
  var totalString = DISP_ELEM.childNodes[whitespaceCount].innerText;
  try{
    var match = totalString.match(innerString);
  }
  catch(SyntaxError){
  }
  if (match == null) {
    DISP_ELEM.childNodes[whitespaceCount].classList.add('highlight-red');
  }
  else { 
    DISP_ELEM.childNodes[whitespaceCount].classList.remove('highlight-red');
  }
  if (e.keyCode == 13){ 
    event.preventDefault();
  }
  if (e.key == ' ') {
    event.preventDefault();
    //  the timed version and the word limit version both need scroll like this 
    try{
      if (DISP_ELEM.childNodes[whitespaceCount + 1].offsetTop > DISP_ELEM.childNodes[whitespaceCount].offsetTop && INP_ELEM.value != ''){
        if ((displayText.length - whitespaceCount) < 10){ 
        }
        else{
          var newOffset = DISP_ELEM.childNodes[whitespaceCount + 1].offsetTop - DISP_ELEM.childNodes[whitespaceCount].offsetTop;
          DISP_ELEM.scrollBy({
            top: newOffset,
            left: 0,
            behavior: 'smooth'
          });
        }
      }
    }
    catch (TypeError){  
    }
    if (INP_ELEM.value == '') {
      INP_ELEM.value = '';
    }
    if (INP_ELEM.value != '') {
      try{
        DISP_ELEM.childNodes[whitespaceCount + 1].classList.add('highlight');
      }
      catch (TypeError){
      }
      if (INP_ELEM.value.trim() == displayText[whitespaceCount]){
        DISP_ELEM.childNodes[whitespaceCount].classList.remove('highlight-red');
        DISP_ELEM.childNodes[whitespaceCount].classList.remove('highlight');
        DISP_ELEM.childNodes[whitespaceCount].classList.add('correct');
        goodWords.push(displayText[whitespaceCount]);
        setCorrectCount();
      }
      else if (INP_ELEM.value.trim() != displayText[whitespaceCount]){
        DISP_ELEM.childNodes[whitespaceCount].classList.remove('highlight-red');
        DISP_ELEM.childNodes[whitespaceCount].classList.remove('highlight');
        DISP_ELEM.childNodes[whitespaceCount].classList.add('incorrect');
        badWords.push(displayText[whitespaceCount]);
      }
      INP_ELEM.value = '';
      setCount();
      if (mode == 'infinite' && whitespaceCount == (displayText.length - 70)){
        infiniteWords();
      }
      if (whitespaceCount == displayText.length) {
        newDate = Date.now();
        INP_ELEM.disabled = true;
        renderResults();
      }
    }
  }
})

menuControl()

function menuControl(){ 
  var lengthSelection;
  document.getElementById('wordDropdown').classList.add('mask');
  $('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(250);
  });
  $('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(250);
  });
  $('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span1').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    
  });
  $('.dropdown-menu li').click(function () {
    input = $(this).parents('.dropdown').find('input').val();
    if (input == 'burst' || input == 'timed' || input == 'quote' || input == 'infinite' ){
      mode = input; 
    }
    else if (input == '10' || input == '30' || input == '60'){
      time = input;
    }
    else if (input == '10 words' || input == '50 words' || input == '200 words'){
      lengthSelection = input;
    }
    stopClock();
    if (mode == 'burst' ){
      DISP_ELEM.classList.add('display-short');
      lengthLimit = 10;
      reset();
      TIME_ELEM.innerHTML = '///';
      document.getElementById('wordDropdown').classList.remove('mask');
      document.getElementById('switch').classList.remove('mask-button');
      document.getElementById('slider').classList.remove('mask-slider');
      document.getElementById('slider').classList.remove('mask-before');
      document.getElementById('timeDropdown').classList.add('mask');
      if (lengthSelection == '10 words'){
        lengthLimit = 10;
        reset();
      }
      else if (lengthSelection == '50 words'){
        DISP_ELEM.classList.remove('display-short');
        lengthLimit = 50;
        reset();
      }
      else if (lengthSelection == '200 words'){
        DISP_ELEM.classList.remove('display-short');
        lengthLimit = 200;
        reset();
      }
    }
    else if (mode == 'timed') {
      DISP_ELEM.classList.remove('display-short');
      document.getElementById('switch').classList.remove('mask-button');
      document.getElementById('slider').classList.remove('mask-slider');
      document.getElementById('slider').classList.remove('mask-before');
      document.getElementById('timeDropdown').classList.remove('mask');
      document.getElementById('wordDropdown').classList.add('mask');
      if (typeof time == 'undefined'){
        timeLimit = 60;
      }
      else{
        timeLimit = parseInt(time);
      }
      lengthLimit = 350;
      reset();
      TIME_ELEM.innerHTML = timeLimit + 's'
    }
    else if (mode == 'quote'){
      TIME_ELEM.innerHTML = '///';
      DISP_ELEM.classList.remove('display-short');
      document.getElementById('timeDropdown').classList.add('mask');
      document.getElementById('wordDropdown').classList.add('mask');
      document.getElementById('switch').classList.add('mask-button');
      document.getElementById('slider').classList.add('mask-slider');
      document.getElementById('slider').classList.add('mask-before');
      reset();
    }
    else if (mode == 'infinite'){
      lengthLimit = 100;
      DISP_ELEM.classList.remove('display-short');
      document.getElementById('timeDropdown').classList.add('mask');
      document.getElementById('wordDropdown').classList.add('mask');
      document.getElementById('switch').classList.remove('mask-button');
      document.getElementById('slider').classList.remove('mask-slider');
      document.getElementById('slider').classList.remove('mask-before');
      reset();
    }
  }); 
}

function reset(){
  stopClock();
  if (mode == 'burst' || mode == 'quote'){
    TIME_ELEM.innerHTML = '///';
  }
  else if (mode == 'infinite'){ 
    TIME_ELEM.innerHTML = '///';
  }
  else{
    TIME_ELEM.innerHTML = timeLimit + 's'
  } 

  displayText = '';
  whitespaceCount = 0;
  correctChar = 0;
  incorrectChar = 0;
  totalChar = 0;
  correctWhiteSpace = 0;
  goodWords = [];
  badWords = [];

  INP_ELEM.disabled = false;
  INP_ELEM.value = '';
  DISP_ELEM.innerHTML = '';

  document.getElementById('stats').classList.remove('mask-stats');
  $(".wpm-stats").fadeOut(200,function(){
    WPM_NUM_ELEM.innerHTML = '--';
    WPM_ELEM.innerHTML = 'WPM  ';
    $(".wpm-stats").fadeIn(200);  });
  $(".gwpm-stats").fadeOut(200,function(){
      GWPM_ELEM.innerHTML = '-- ' + 'gWPM';
      ACC_ELEM.innerHTML = '-- % acc';
    $(".gwpm-stats").fadeIn(200);  });
    $(".other-stats").fadeOut(200,function(){
      CORR_ELEM.innerHTML = 'correct chars: --';
      INCORR_ELEM.innerHTML = 'incorrect chars: --';
      LIVE_WPM_ELEM.innerHTML = '--';
    $(".other-stats").fadeIn(200);  });
  DISP_ELEM.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  if (flag == true){
    capWords(makeSentence()); 
  } 
  else {
    if (mode == 'quote'){
      selectQuote();
    }
    else if (mode == 'infinite'){
      infiniteWords();
    }
    else{
      makeSentence();
    }
  }
  $(".display").slideToggle(210,function(){
    renderText();
    $(".display").slideDown (210);
  });
}

renderText();


