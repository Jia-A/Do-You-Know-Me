var readlineSync = require("readline-sync");

var userName = readlineSync.question("Helloooo!! Can you please tell me your name? \n");

console.log("Welcome "+userName+", to DO YOU KNOW ME!! \n");
var score = 0;
function play(question, answer)
{
  var userSaid = readlineSync.question(question+" :");

  if (userSaid.toUpperCase() === answer.toUpperCase())
  {
    console.log("You're absolutely right!");
    score= score+1;
  }
  else
  {
    console.log("Nahh, wrong answer dude!!");
    console.log("Correct answer is : ",answer);
  }
  console.log("Your score : ",score);
  console.log("------")
}
console.log("Here are the questions... \nGoodluck!");
var questions = [
  {
    question: "First one, What is my nickname?",
    answer : "Ashley"
  },
  {
    question : "Now, tell me, who is my ideal?",
    answer : "Michael Jackson"
  },
  {
    question : "Which One Direction member do I like the most?",
    answer : "Zayn Malik"
  },
  {
    question : "What's my favourite food?",
    answer : "Dosa"
  },
  {
    question : "What's my favourite thing to eat apart from food?",
    answer : "Bournvita"
  },
  {
    question : "What's my favourite hobby?",
    answer : "Painting"
  },
  {
    question : "What musical instrument do I own?",
    answer : "Guitar"
  },
  {
    question : "What am I studying currently",
    answer : "MCA"
  },
  {
    question : "Where do I live?",
    answer : "Ujjain"
  },
  {
    question : "What's my birth year?",
    answer : "1999"
  },


];
for(var i=0; i<questions.length; i++)
{
  var current = questions[i];
play(current.question, current.answer)
}
if(score>5)
{
  console.log("Ohh, you know me so well man!!!")
}
else{
  console.log("Ohh, you don't know me at all!!!")
}
console.log("Thank you for playing.")