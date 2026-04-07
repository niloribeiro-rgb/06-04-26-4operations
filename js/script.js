function calcular() {
    
    let number1 = Number(document.querySelector(`#n1`).value)
    let number2 = Number(document.querySelector(`#n2`).value)

    let soma = number1 + number2
    let subtracao = number1 - number2
    let multiplicacao = number1 * number2
    let divisao = number1 / number2

    let exibir = document.querySelector(`#exibir`)
    exibir.innerHTML = `soma${soma} <br> subtracao${subtracao} <br> multiplicacao${multiplicacao}  <br> divisao${divisao} `
    

}