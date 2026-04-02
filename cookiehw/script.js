
let COOKIEHUGGERS = []

const name = document.querySelector("#name")
const date = document.querySelector("#date")
const message = document.querySelector("#message")

const submitBtn = document.querySelector("[type='submit']") 

console.log(COOKIEHUGGERS);



submitBtn.addEventListener("click" , function(e){
    e.preventDefault()
    audio.play()
    addNewHugger()
    console.log(COOKIEHUGGERS);
    
})

document.addEventListener("keydown" , (e) => {
    
    if(e.key === "Enter"){
        e.preventDefault()
        audio.play() 
        const newHugger = {
            name: name.value,
            date: date.value,
            message: message.value,
        } 
        addNewHugger(newHugger)
        console.log(COOKIEHUGGERS);
    }

})

function addNewHugger(newHugger) {
    if(newHugger) {
        COOKIEHUGGERS.push(newHugger)
    } else {
        const newHugger = {
            name: name.value,
            date: date.value,
            message: message.value,
        }
        COOKIEHUGGERS.push(newHugger)
    }
}