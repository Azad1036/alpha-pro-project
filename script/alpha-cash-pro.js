// function homeSection(){
//     //Home Section
//     const homeId = document.getElementById('home');
//     homeId.classList.add('hidden')
    
//     //Play Game Section
//     const gameId = document.getElementById('play-game');
//     gameId.classList.remove('hidden')
// }

function continuee() {
    //setp-1: call funtion and store this funtion
    const alphabet = getAlphabet()

    //step-2: output displey rendom number set id and and store id and use innerText 
    const displayOutput = document.getElementById('alphabat-display-output');
    displayOutput.innerText = alphabet ;

    //step-3: set bacground color use same alphabat
    setBackgroundAlphabat(alphabet)
}

//all funtion call
function homeSection() {
    home('home')
    play('play-game')
    //Alphabat Output 
    continuee()
}

//Press Keybord displey show any alphabat then click key
function KeybordPress(event) {
    //userPress Key
    const pressKeyboad = event.key ;

    //Expeted Key
    const userPressId = document.getElementById('alphabat-display-output');
    const userPress = userPressId.innerText
    const expetedAlphabat = userPress.toLowerCase()

    //compayer to value and output
    if (pressKeyboad === expetedAlphabat) {
        //scroe update 
        //step-1: find score and convating number
        const scoreId = document.getElementById('score-updates');
        const scoreConvating = scoreId.innerText ;
        const numberCovating = parseInt(scoreConvating) ;

        //step-2: update scroe number 
        const updatescroe = numberCovating + 1

        //step-3: final Output
        scoreId.innerText = updatescroe

        //start a new round
        removeBackgroundAlphabat(pressKeyboad)
        continuee()
    }
    else{
        console.log('You loss')
        //life update
        //step-1: find life and convating number
        const lifeScore = document.getElementById('life-update');
        const lifeConvating = lifeScore.innerText ;
        const numberConvat = parseInt(lifeConvating)

        //step-2: update final number 
        const updatelifescore = numberConvat - 1

        //setp-3: final Output
        lifeScore.innerText = updatelifescore
    }


}
document.addEventListener('keyup', KeybordPress);

