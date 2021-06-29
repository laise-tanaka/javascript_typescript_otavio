/* EXERCÍCIO 01 - LET E CONST
Fulano da Silva tem 30 anos, pesa 84 kg,
tem 1.8 de altura e seu IMC é 24.81
Luiz Gustavo da Silva Miranda nasceu em 1991
*/

const nome = 'Fulano'
const sobrenome = 'da Silva'
const idade = 50
const peso = 84
const altura = 1.84

let indiceMassaCorporal = peso / (altura * altura)
let anoNascimento = new Date().getFullYear() - idade

//template string
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${altura}m e seu IMC é de ${indiceMassaCorporal.toFixed(2)}`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)