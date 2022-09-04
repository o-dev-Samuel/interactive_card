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
    cardnumber.innerText = cardnumberinput.value
})

cardmesinput.addEventListener('keyup', () => carddate.innerText = `${cardmesinput.value}/`)

cardanoinput.addEventListener('keyup', () => carddate.innerText = `${cardmesinput.value}/${cardanoinput.value}`)

cardcodinput.addEventListener('keyup', () => cardcod.innerText = cardcodinput.value)



// Limitando os caracteres (incompleto) falta saber como isentar a tecla backspace
cardnumberinput.addEventListener('keydown', () => {
    if (cardnumberinput.value.length == 16) {
        cardmesinput.focus()
    }
})

cardmesinput.addEventListener('keydown', () => {
    if (cardmesinput.value.length == 2) {
        cardanoinput.focus()
    }
})

cardanoinput.addEventListener('keydown', () => {
    if (cardanoinput.value.length == 2){
        cardcodinput.focus()
    }
})



function confirmar() {
    cardcod.innerHTML = 'deu certo'
}



