"usestrict"
addEventListener("load", () => {
  let numberMounth = parseInt(prompt("введіть номер місяця", "5"))
  if (numberMounth > 12) alert("ERRROR")
  if (numberMounth === 12 || numberMounth === 1 || numberMounth === 2)
    alert("зима")
  if (numberMounth === 3 || numberMounth === 4 || numberMounth === 5)
    alert("весна")
  if (numberMounth === 6 || numberMounth === 7 || numberMounth === 8)
    alert("літо")
  if (numberMounth === 9 || numberMounth === 10 || numberMounth === 11)
    alert("осінь")
})
