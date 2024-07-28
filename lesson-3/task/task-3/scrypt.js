"usestrict"
addEventListener("load", () => {
  let randomNumber = Math.floor(Math.random() * 5 + 1)
  console.log(randomNumber)
  let userNumber = parseInt(prompt("вгадайте число від 1 до 5", "3"))

  if (userNumber < randomNumber) {
    alert("ваше число менше від загаданого")
    let userNumber = parseInt(prompt("спробуйте ще раз", "4"))
    if (userNumber === randomNumber) alert("ви вгадали число")
  }
  if (userNumber > randomNumber) {
    alert("ваше число більще від загаданого")
    let userNumber = parseInt(prompt("спробуйте ще раз", "2"))
    if (userNumber === randomNumber) alert("ви вгадали число")
  }
  if (userNumber === randomNumber) alert("ви вгадали число")
  if (randomNumber !== userNumber)
    alert("за дві спроби невдалось спробуйте щераз")
})
