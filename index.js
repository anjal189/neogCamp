var readlineSync = require("readline-sync");
score = 0

var userName = readlineSync.question("What is your name ")

console.log("Hii " + userName )

function play(question,answer)
{
  var userAns = readlineSync.question(question)
  if(userAns === answer )
  {
    console.log("right")
    score=score + 1
  }
  else{
    console.log("wrong")
  }
  console.log("score is ",score)
}

play("where do i live ","sangamner")
play("Fev Colour ","black")
play("Fev City ","pune")