"usestrict"
addEventListener("load", () => {
  const userSeconds = parseInt(prompt("введіть кількість секунд", "1000"))
  const hours = userSeconds / 3600
  const minutes = userSeconds / 60
  const answer = document.querySelector(".answer")
  answer.innerHTML = `
  В минутах буде ${minutes}, а в годинах ${hours} 
  `
})
