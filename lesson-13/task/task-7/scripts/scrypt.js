"usestrict"

function getRandomNumber(min = 1, max = 99) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

function getSimulatorAddition(randomNum) {
  let a, b
  let example = `${(a = randomNum())} + ${(b = randomNum())}`
  let res = a + b
  return [example, res]
}

let showInterval = setInterval(() => {
  let [example, res] = getSimulatorAddition(getRandomNumber)
  let userAnswer = parseInt(prompt(`скільки буде ${example}`))
  if (userAnswer === res) alert("правельно")
  else alert("He правельно")
}, 10000)
