"usestrict"
addEventListener("load", function () {
  const userNumber = parseInt(prompt("загадайте число від 1 до 10", ""))
  if (userNumber < 1 || userNumber > 10 || isNaN(userNumber))
    alert("некоректне число")
  else {
    confirm("компютер буде відгадувати поки не відгалає")
    for (let i = 0; i < Infinity; i++) {
      let numberComputer = Math.floor(Math.random() * 10) + 1
      let answerComputer = confirm(`${numberComputer} правильно?`)
      if (userNumber === numberComputer) {
        alert("компютер вгадав число")
        break
      } else if (answerComputer === true) {
        alert("компютер вгадав число")
        break
      }
    }
  }
})
