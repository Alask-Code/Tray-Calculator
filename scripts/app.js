const buttons = document.querySelectorAll('button')

const input = document.querySelector(".input")

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerText == "C") {
            input.innerText = ""
            // input.innerText = input.innerText.substring(0, input.innerText.length - 1)
            input.focus()
        } else {
            if (button.innerText == "=") {
                input.innerText = eval(input.innerText)
            } else {
                input.innerText += button.innerText
                input.focus()
            }
        }
    })
})