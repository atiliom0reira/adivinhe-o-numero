let result = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1;
while(Number(result) != randomNumber) {
    result = prompt("Erro, tente novamente")
    xAttempts++
}

let tentativasText;
if (xAttempts === 1) {
    tentativasText = "tentativa";
} else {
    tentativasText = "tentativas";
}

alert(`Parabéns, você adivinhou o número em ${xAttempts} ${tentativasText}`);
