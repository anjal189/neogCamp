
//5//
var readlineSync = require ('readline-sync')

var userAge = readlineSync.question('Are you over 25 ?')
console.log(userAge)
if(userAge === "yes")
{
  console.log('your right')
}
else{
  console.log('your wrong')
}

//6//
var readlineSync = require ('readline-sync')

var score = 0
var checkAns = readlineSync.question('do you like programming ?')
console.log(checkAns)
if (checkAns === "yes")
{
  console.log('your right')
  score = score + 1
  console.log('score is ' + score)
}
else {
  console.log('your wrong')
  score = score - 1
}
