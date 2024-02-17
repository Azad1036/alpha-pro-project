//only use funtion same output 

//Home Section 
function home(elements) {
   const homeOption = document.getElementById(elements);
   homeOption.classList.add('hidden')
}

//PlayGame Section
function play(elements) {
    const palyOption = document.getElementById(elements) ;
    palyOption.classList.remove('hidden')
}

//Rendom Number code
function getAlphabet() {
    //step-1: a-z number add and split convat is like array
    const getAlphabetSection = "abcdefghijklmnopqrstuvwxyz"
    const getAlphabetSplit = getAlphabetSection.split('')

    //step-2: Readmon number find js code use and random number to convat interjer number 0-25
    const randomNumber = Math.random()*25
    const index = Math.round(randomNumber);

    //step-3: Store index number to alphabat and retun option
    const alphabets = getAlphabetSplit[index] ;
    console.log(alphabets)
    return alphabets ;
}

// Set Alphabat Background Color 
function setBackgroundAlphabat(elements) {
    const backgroundColor = document.getElementById(elements);
    backgroundColor.classList.add('bg-orange-400')
}