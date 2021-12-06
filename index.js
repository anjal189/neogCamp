var readlineSync = require("readline-sync")

var score = 0

function queAns(question,answer)
{
  var uAns = readlineSync.question(question);

  if (uAns === answer)
  {
    console.log("your right")
    score = score + 1 
  }
  else
  {
    console.log("your wrong")
    score = score - 1
  }
}

queAns("What is your name? " , "Anjali")
queAns("What is your age? " , "25")
console.log("your score is ",score)

