var cardnameinput = window.document.getElementById('cardnameinput')

var cardnumberinput = window.document.getElementById('cardnumberinput')

var cardmesinput = window.document.getElementById('cardmesinput')

var cardanoinput = window.document.getElementById('cardanoinput')

var cardcodinput = window.document.getElementById('cardcodinput')

var cardname = document.getElementById('cardname')
var cardnumber = document.getElementById('numcard')
var carddate = window.document.getElementById('carddate')
var cardcod = window.document.getElementById('cardcod')

//clonando os dados no card
cardnameinput.addEventListener('keyup', () => cardname.innerText = cardnameinput.value)

cardnumberinput.addEventListener('keyup', () => {
    if (cardnumberinput.value.length <= 16) {
        cardnumber.innerText = cardnumberinput.value
    }
})

cardmesinput.addEventListener('keyup', () => carddate.innerText = `${cardmesinput.value}/`)

cardanoinput.addEventListener('keyup', () => carddate.innerText = `${cardmesinput.value}/${cardanoinput.value}`)

cardcodinput.addEventListener('keyup', () => cardcod.innerText = cardcodinput.value)



// Desisti de limitar os caracteres, vou apenas informar que o campo está incorreto
cardnumberinput.addEventListener('keyup', (event) => {
    let tecla = event.code;
    if (cardnumberinput.value.length > 16) {
        cardnumberinput.style.border = 'solid 1px rgb(180, 28, 28)'
    } else {
        cardnumberinput.style.border = 'solid 1px rgb(165, 165, 165)'
    }
})

cardmesinput.addEventListener('keydown', (event) => {
    let tecla = event.code;
    if (event.code != 'Backspace') {
        if (cardmesinput.value.length >= 2) {
            cardanoinput.focus()
        }
    }
})

cardanoinput.addEventListener('keydown', () => {
    if (cardanoinput.value.length == 2) {
        cardcodinput.focus()
    }
})



function confirmar() {
    cardcod.innerHTML = 'deu certo'
}



