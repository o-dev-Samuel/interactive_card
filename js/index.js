var cardnameinput = window.document.getElementById('cardnameinput')

var cardnumberinput = window.document.getElementById('cardnumberinput')

var cardmesinput = window.document.getElementById('cardmesinput')

var cardanoinput = window.document.getElementById('cardanoinput')

var cardcodinput = window.document.getElementById('cardcodinput')

var btnConfirmar = window.document.getElementById('btnconfirmar')

var cardname = document.getElementById('cardname')
var cardnumber = document.getElementById('numcard')
var carddate = window.document.getElementById('carddate')
var cardcod = window.document.getElementById('cardcod')

//clonando os dados no card
cardnameinput.addEventListener('keyup', () => {
    if (cardnameinput.value.length < 30) {
        cardname.innerText = cardnameinput.value
    } else if (cardnameinput.value.length == 30) {
        cardname.innerText = `${cardnameinput.value}...`
    }
})

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
    if (tecla != 'Backspace' & tecla != 'Delete') {
        if (cardmesinput.value.length >= 2) {
            cardanoinput.focus()
            cardmesinput.style.border = 'solid 1px rgb(165, 165, 165)'
                btnConfirmar.removeAttribute('disabled')
            if (cardmesinput.value > 12) {
                cardmesinput.style.border = 'solid 1px rgb(180, 28, 28)'
                btnConfirmar.setAttribute('disabled', true)
            }
        }
    }
})

cardanoinput.addEventListener('keyup', (event) => {
    let tecla = event.code;
    if (tecla != 'Backspace' & tecla != 'Delete') {
        if (cardanoinput.value.length == 4) {
            cardcodinput.focus()
        }
    }
})



function confirmar() {
    cardcod.innerHTML = 'DEU CERTO'
}



