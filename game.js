'use strict';

let secretNum= Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;

/*storing the value of funtion in displayMsg(i.e display message )
so i can prevent duplication of code, as I'll have to print the message many times */
const displayMsg=function(msg){
    document.querySelector('.msg').textContent=msg;
};


//an EventListener handles the event and also expects a fuction after that event 
document.querySelector('.checkBTN').addEventListener('click', function(){

    //in JS the inputs we take from the user are strings so we convert it into a number using Number function
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess);


    //when there is no input and the user clicks the check button
    if(!guess){
        displayMsg('⛔No Number⛔');
    }

    //when the player wins the game
    else if(guess===secretNum){
        displayMsg('🥳 Correct Number! 🎉');
        //since the number is correct I'm revealing the number that was hidden 
        document.querySelector('.hiddenNum').textContent=secretNum;

        /*after getting the correct number here I'm changing the background colour
        and also the width so as to make it look like a congratulating winning theme */
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.hiddenNum').style.width='30rem';


    if(score>highScore){
        highScore=score;
        document.querySelector('.hscore').textContent=highScore;
}
    }
    //when the guess is wrong 
    else if(guess !== secretNum){
        if(score>1){
            displayMsg(guess>secretNum?'📈 Too High!':'📉Too Low!');
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            displayMsg('💥You Lost The Game');
            document.querySelector('score').textContent=0;
        }
    }
});


//when the user hits the again button the game goes to default settings 
document.querySelector('.AgainBTN').addEventListener('click', function(){
    score=20;
    secretNum=Math.trunc(Math.random()*20)+1;

    displayMsg('Start Guessing .....');
    document.querySelector('.score').textContent=score;
    document.querySelector('.hiddenNum').textContent='?';
    document.querySelector('.guess').textContent='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.hiddenNum').style.width='15rem';

});