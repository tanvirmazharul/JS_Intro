//text change
function textChange(){
  document.getElementById("tc").innerHTML = "Hello World!"
}


//date & time
function dateAndTime(){
  document.getElementById('h4').innerHTML = Date();
}

//Mood change
function sad(){
  document.getElementById('mood').src = 'images/sad.png';
}

function smile(){
  document.getElementById('mood').src = 'images/smile.png';
}


//Font change
function bigFont(){
  document.getElementById('h3').style.fontSize = "40px";
}

//Text Print
function myParagraph() {
  document.getElementById("t1").innerHTML = "Hello Good Day!";
}

//Data Addition
let number1 =50;
let number2 =60;
let result =number1 + number2;

function add(){
  document.getElementById('data').innerHTML=result;
}

//Data Subtraction
var a = 50;
var b = a - 25;
function sub(){
  document.getElementById('b').innerHTML = "Value of b is: " +b;
}


//Data Multipication
function Multipication(){
  document.getElementById('mul').innerHTML=5*10;
}

//Another system of Multiplication
var a = 5;
var b = a * 5;
function m(){
  document.getElementById('m1').innerHTML = "Value of b is: " +b;
}


//Data Division
var a = 50;
var b = a / 2;
function div(){
  document.getElementById('divi').innerHTML = "Value of b is: " +b;
}

//Content Change
function changeContent(){
  document.getElementById('change').innerHTML="Hellow! Good Day ^_^";
}

//JavaScript Strings
let answer1 = "It's alright";
let answer2 = "He is Mr. Obama";
let answer3 = 'So you can call him Obama.';
function calStr(){
  document.getElementById('s').innerHTML = answer1 + "<br>" + answer2 + "<br>" + answer3;
}