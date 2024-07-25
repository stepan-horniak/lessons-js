"usestrict"
addEventListener("load", () => {
  const userYear = parseInt(prompt("введіть ваш рік народження", "1995"))
  const currentYear = 2024

  const howYear = currentYear - userYear
  const answer = document.querySelector(".answer")
  answer.innerHTML = howYear
})
