const buttonAction = document.querySelector(".start-sortear")
const result = document.querySelector(".result-random")

function getRandomInt() {
    const min = Math.ceil(document.querySelector(".min-value").value)
    const max = Math.floor(document.querySelector(".max-value").value)

    if(max < min) {
        alert("Erro!!! O valor minimo tem que ser menor que o valor máximo")

        result.innerHTML = "Erro"
        result.style.fontSize = "30px"
    } else {
        const resultRandom = Math.floor(Math.random() * (max - min + 1) + min);

        result.style.fontSize = "40px"
        result.innerHTML = resultRandom
    }
}




buttonAction.addEventListener("click", getRandomInt )

/*
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

*/