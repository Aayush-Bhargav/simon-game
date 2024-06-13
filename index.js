let buttonColors = ["green", "red", "yellow", "blue"] //array to store button colors

let gamePattern = [];//stores pattern that the user must try to guess

let userPattern = [];//stores pattern entered by the user

let level = 0; //stores current level

let maxLevel=0; //stores maximum level

const nextSequence = () => {//function to randomly generate the next color in the sequence
    
    $('#level-title').text(`Level ${level + 1}`);//update text
    let randomNumber = Math.floor((Math.random() * (4))); //generates a random number between 0 and 3
    console.log(randomNumber);
    let randomColor = buttonColors[randomNumber];//chooses a random color from buttonColors
    playSound(randomColor);//play sound corresponding to that color
    flashButton(randomColor);//flash that button
    gamePattern.push(randomColor);//Add this color to our sequence that the user must try and guess
    level++;

}

let playSound = (color) => {//function to play audio corresponding to a particular color
    
    let audio = new Audio(`sounds/${color}.mp3`);
    audio.play();

}

let flashButton = (color) => { //function to create flash effect

    let chosenbtn = $(`#${color}`);//select the button with that color
    chosenbtn.animate({ opacity: 0 }, 100).animate({ opacity: 1 }, 100);//create a flashing effect for that button

}

let checkAnswer = (currentLevel) => {//function to match answer
    
        let flag = 0;
        if (gamePattern[currentLevel-1] != userPattern[currentLevel-1]) {//this means currently chosen color by the user is wrong
                flag = 1;
        }
        if (flag)//means mismatch occured!
           { 
            if(level-1>maxLevel){//new maxlevel reached
                maxLevel=level-1;
            }
            console.log("Wrong Answer");
            $('h1').text(`Game Over. Press Any Key or Click Here to Restart.`);
            playSound('wrong');//play audio to indicate the game is over
            //reset the gamePattern and userPattern and level
            gamePattern=[];
            userPattern=[];
            //add a red flash
            $('body').addClass('game-over');
            setTimeout(()=>{
                $('body').removeClass('game-over');
            },300);
            if(level==0)
                $('#currentScore').text(`Current Score:${level}`);//display current score
            else
                $('#currentScore').text(`Current Score:${level-1}`);//display current score
            $('#maxScore').text(`Max Score:${maxLevel}`);//display maximum score
            level=0;//reset the level
            
           }
        else {
            console.log("Correct Answer!");
            if(currentLevel==level){//this means that the user has correctly guessed all colors in sequence
                setTimeout(() => { //move to the next level after one second and reset user pattern
                nextSequence();
                userPattern=[];
                 }, 1000);
                 $('#currentScore').text(`Current Score:${level}`);//display current score
                 let display=level>maxLevel?level:maxLevel;
                 $('#maxScore').text(`Max Score:${display}`);//and maximum score
                }
        }
    
}

let addEffectToChosenButton = (chosenBtn) => {//function to play sound corresponding to the button color and also give an effect that it has been clicked
    
    let userChosenColor = chosenBtn.attr('id');
    playSound(userChosenColor);
    chosenBtn.addClass('pressed');
    setTimeout(() => { chosenBtn.removeClass('pressed') }, 100)
    userPattern.push(userChosenColor);

}
// console.log(randomColor);

$(document).on('keypress', () => {

    if (level === 0) {//means either the game has not started yet or it is waiting to be restarted
        $('#currentScore').text(`Current Score:${level}`);//display current score
        nextSequence(); //stores the most recently generated color
    }

});

$('h1').on('click', () => {

    if (level === 0) {//means either the game has not started yet or it is waiting to be restarted
        $('#currentScore').text(`Current Score:${level}`);//display current score
        nextSequence(); //stores the most recently generated color
    }

});

let buttons = $('div.btn')//selects all the divs with class btn
buttons.on('click', (event) => {
    let chosenBtn = $(event.currentTarget);//choose corresponding clicked button
    addEffectToChosenButton(chosenBtn);//add effect to it
    checkAnswer(userPattern.length);//call to check if it is correctly selected
});
