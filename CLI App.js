var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("What is Your name?\n");
console.log("welcome " + userName);
var knowsRatish = readlineSync.question("Do You Know Ratish?\n");

// knowRatish == yes
// questions
// plays
// score



function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("Right");
    score += 1;
  } else {
    console.log("wrong");
    score -= 0.5;
  }
  console.log("currentscore " + score);
  console.log("----------");

  if(score == 2){
    console.log("hurray youn are my frien!!!");
  }
}

if(knowsRatish === 'Yes'){
  // array of object;
  var questions = [{
    question: "where I do live?\n",
    answer: "pune"
  }, {
    question: "my favorite superhero is?\n",
    answer: "Ironman"
  }];
  // loop
  for (i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
} else {
  console.log("sorry for disturbance!!!");
}