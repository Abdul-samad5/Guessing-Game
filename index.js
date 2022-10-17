let score = 0
let range = 2
console.log("welcome to zuri game")
console.log("Please enter your name")
let value = prompt()
console.log("lets begin " + value)
function random(range){
    let randomNumber = Math.floor(Math.random()*range) + 1
    return randomNumber
}
let randomNum = 0
do{
    randomNum = random(range)
   // console.log(randomNum)
    console.log("Guess a number between 1 and " + range)
    userNumber = parseInt(prompt())
    if(userNumber === randomNum){
        console.log("correct guess!!!!!")
        range += 1
        score +=1
    }else{
        console.log("Wrong guess!!!!!")
        console.log("Your score is " + score)
        console.log("Thank you for Playing")
    }
}while(userNumber=== randomNum)
