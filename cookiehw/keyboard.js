
document.addEventListener("keydown", (e) => {
    key.innerHTML = `<h1>${e.key}</h1>`

    if(e.key === "k" || e.key === "K"){
        key.innerHTML = `<h1>${e.key} COOKIIIIIIE</h1>`
        audio.play()
    }
})