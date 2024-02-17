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



function homeSection() {
    home('home')
    play('play-game')
    //Alphabat Output 
    continuee()
}

