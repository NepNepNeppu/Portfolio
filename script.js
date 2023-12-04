const enhance = (id) => {
    const element = document.getElementById(id),
          text = element.innerText.split("");
          
    element.innerText = "";

    let index = 0

    text.forEach(letter => {
        const div = document.createElement("div");
        const span = document.createElement("span");
        index += 2
    
        div.className = "letter";
        span.className = "text";
        span.innerText = letter;

        span.style.whiteSpace = "pre"
        span.style.animationComposition = "add";
        span.style.animationDelay = index * -100 + 'ms';
        div.style.animationDelay = index * -100 + 'ms';
        // span.style.animationDelay = Math.floor(Math.random() * 100) + 'ms';

        span.classList.add('animate')

        element.appendChild(div)
        div.appendChild(span)
})
}

enhance("name")