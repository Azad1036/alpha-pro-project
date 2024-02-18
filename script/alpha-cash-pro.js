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
    displayOutput.innerText = alphabet;

    //step-3: set bacground color use same alphabat
    setBackgroundAlphabat(alphabet)
}

//all funtion call
function homeSection() {
    home('home')
    play('play-game')
    home('user-score')
    //reset the game
    setElementsVlauseById('score-updates', 0)
    setElementsVlauseById('life-update', 5)
    //Alphabat Output 
    continuee()
}

//User-Scroe Section
function gameOver() {
    home('play-game')
    play('user-score')

    //update final Scroe 
    const result = updateElementsById('score-updates')
    setElementsVlauseById('final-update', result)

    //clear Alphabat more click keyboard BackgroundColor
    const clear = removeAlphabatBackground('alphabat-display-output')
    removeBackgroundAlphabat(clear)
}


//Press Keybord displey show any alphabat then click key
document.addEventListener('keyup', KeybordPress);

function KeybordPress(event) {
    //userPress Key
    const pressKeyboad = event.key;
    
    //stop the game player press 'Esc' buttom
    if (pressKeyboad === "Escape") {
        gameOver()
    }

    //Expeted Key
    const userPressId = document.getElementById('alphabat-display-output');
    const userPress = userPressId.innerText
    const expetedAlphabat = userPress.toLowerCase()

    //compayer to value and output
    if (pressKeyboad === expetedAlphabat) {

        const score = updateElementsById('score-updates')
        const updated = score + 1
        setElementsVlauseById('score-updates', updated)
        //--------------------------------------------
        // //scroe update 
        // //step-1: find score and convating number
        // const scoreId = document.getElementById('score-updates');
        // const scoreConvating = scoreId.innerText ;
        // const numberCovating = parseInt(scoreConvating) ;

        // //step-2: update scroe number 
        // const updatescroe = numberCovating + 1

        // //step-3: final Output
        // scoreId.innerText = updatescroe

        //start a new round
        removeBackgroundAlphabat(pressKeyboad)
        continuee()
    }
    else {
        const score = updateElementsById('life-update')
        const updated = score - 1
        setElementsVlauseById('life-update', updated)
        //-------------------------------------------
        //life update
        //step-1: find life and convating number
        // const lifeScore = document.getElementById('life-update');
        // const lifeConvating = lifeScore.innerText ;
        // const numberConvat = parseInt(lifeConvating)

        // //step-2: update final number 
        // const updatelifescore = numberConvat - 1

        // //setp-3: final Output
        // lifeScore.innerText = updatelifescore

        if (updated === 0) {
            gameOver()
        }
    }
}


