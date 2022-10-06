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
var revisar = window.document.getElementById('revisar')
var form = window.document.getElementById('form')
var containercard = window.document.getElementById('containercard')
var titulo = window.document.getElementById('titulo')
var confirmacao = window.document.getElementById('confirmacao')
var btnCerto = window.document.getElementById('btncerto')
var finalizacao = window.document.getElementById('finalizacao')
var btnCorrigir = window.document.getElementById('btncorrigir')
var btnInicio =window.document.getElementById('btninicio')

//clonando os dados no card
cardnameinput.addEventListener('keyup', (event) => {
    let tecla = event.code
    if (cardnameinput.value.length < 30) {
        // Escrevendo no cartão
        cardname.innerText = cardnameinput.value
    } else if (cardnameinput.value.length == 30) {
        cardname.innerText = `${cardnameinput.value}...`
    }
})

cardnumberinput.addEventListener('keyup', (event) => {
    let tecla = event.code
    if (cardnumberinput.value.length <= 16) {
        // Escrevendo no cartão
        cardnumber.innerText = cardnumberinput.value
        // Voltando a borda para a cor normal
        cardnumberinput.style.border = 'solid 1px rgb(165, 165, 165)'
        // Ocultando a mensagem de revisão
        revisar.style.display = 'none'
        // Habilitando btn 'Confirmar'
        btnConfirmar.removeAttribute('Disabled')
        btnConfirmar.style.backgroundColor = 'rgb(24, 3, 44)'
        btnConfirmar.style.color = '#fff'
        
    }
    if(tecla != 'Backspace' && tecla != 'Delete' && cardnumberinput.value.length == 16){
        cardmesinput.focus()
    }
    if(cardnumberinput.value.length > 16){
        // Mudando a cor da borda caso haja erro
        cardnumberinput.style.border = 'solid 2px rgb(180, 28, 28)'
        // Exibindo a mensagem de alerta
        revisar.style.display = 'flex'
        // Desabilitando o btn "confirmar"
        btnConfirmar.setAttribute('Disabled', true)
        btnConfirmar.style.backgroundColor = 'rgb(35, 31, 37)'
        btnConfirmar.style.color = 'rgb(110, 105, 112)'
        
    }
})

cardmesinput.addEventListener('keyup', (event) => { 
    let tecla = event.code
    if (cardmesinput.value.length <= 2){
        // Escrevendo no cartão
        carddate.innerText = `${cardmesinput.value}/`
        // Voltando a borda para a cor normal
        cardmesinput.style.border = 'solid 1px rgb(165, 165, 165)'
        // Ocultando a mensagem de revisão
        revisar.style.display = 'none'
        // Habilitando btn 'Confirmar'
        btnConfirmar.removeAttribute('Disabled')
        btnConfirmar.style.backgroundColor = 'rgb(24, 3, 44)'
        btnConfirmar.style.color = '#fff'
    }
    if(tecla != 'Backspace' && tecla != 'Delete' && cardmesinput.value.length == 2){
        cardanoinput.focus()
    }
    if (cardmesinput.value.length > 2 || cardmesinput.value > 12) {
        // Mudando a cor da borda caso haja erro
        cardmesinput.style.border = 'solid 2px rgb(180, 28, 28)'
        // Exibindo a mensagem de alerta
        revisar.style.display = 'flex'
        // Desabilitando o btn "confirmar"
        btnConfirmar.setAttribute('Disabled', true)
        btnConfirmar.style.backgroundColor = 'rgb(35, 31, 37)'
        btnConfirmar.style.color = 'rgb(110, 105, 112)'
    }
})

cardanoinput.addEventListener('keyup', (event) => {
    let tecla = event.code
    if(cardanoinput.value.length <= 4){
        // Escrevendo no cartão
        carddate.innerText = `${cardmesinput.value}/${cardanoinput.value}`
        // Voltando a borda para a cor normal
        cardanoinput.style.border = 'solid 1px rgb(165, 165, 165)'
        // Ocultando a mensagem de revisão
        revisar.style.display = 'none'
        // Habilitando btn 'Confirmar'
        btnConfirmar.removeAttribute('Disabled')
        btnConfirmar.style.backgroundColor = 'rgb(24, 3, 44)'
        btnConfirmar.style.color = '#fff'
    }
    if(tecla != 'Backspace' && tecla != 'Delete' && cardanoinput.value.length == 4){
        cardcodinput.focus()
    }
    if(cardanoinput.value.length > 4){
        // Mudando a cor da borda caso haja erro
        cardanoinput.style.border = 'solid 2px rgb(180, 28, 28)'
        // Exibindo a mensagem de alerta
        revisar.style.display = 'flex'
        // Desabilitando o btn "confirmar"
        btnConfirmar.setAttribute('Disabled', true)
        btnConfirmar.style.backgroundColor = 'rgb(35, 31, 37)'
        btnConfirmar.style.color = 'rgb(110, 105, 112)'
    }
})

cardcodinput.addEventListener('keyup', (event) => {
    if(cardcodinput.value.length <= 3){
        // Escrevendo no cartão
        cardcod.innerText = cardcodinput.value
        // Voltando a borda para a cor normal
        cardcodinput.style.border = 'solid 1px rgb(165, 165, 165)'
        // Ocultando a mensagem de revisão
        revisar.style.display = 'none'
        // Habilitando btn 'Confirmar'
        btnConfirmar.removeAttribute('Disabled')
        btnConfirmar.style.backgroundColor = 'rgb(24, 3, 44)'
        btnConfirmar.style.color = '#fff'
    }
    else{
        // Mudando a cor da borda caso haja erro
        cardcodinput.style.border = 'solid 2px rgb(180, 28, 28)'
        // Exibindo a mensagem de alerta
        revisar.style.display = 'flex'
        // Desabilitando o btn "confirmar"
        btnConfirmar.setAttribute('Disabled', true)
        btnConfirmar.style.backgroundColor = 'rgb(35, 31, 37)'
        btnConfirmar.style.color = 'rgb(110, 105, 112)'
    }
})


function confirmar() {
    form.style.display = 'none'
    containercard.style.height = '400px'
    titulo.style.display = 'block'
    confirmacao.style.display = 'flex'
}

// Exibindo a div de 'cartão adicionadp'
btnCerto.addEventListener('click', () => {
    confirmacao.style.display = 'none'
    finalizacao.style.display = 'block'
    containercard.style.height = '200px'
    titulo.style.display = 'none'
})

// Exibindo o form para correção
btnCorrigir.addEventListener('click', () => {
    form.style.display = 'flex'
    containercard.style.height = '200px'
    titulo.style.display = 'none'
    confirmacao.style.display = 'none'
})

// Recarregando a página para voltar ao início
btnInicio.addEventListener('click', () => {
    location.reload()
})

