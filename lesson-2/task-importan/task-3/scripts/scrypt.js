"usestrict"
addEventListener("load", () => {
  const cost = parseInt(prompt("введіть вартість товару", "50"))
  const quantity = parseInt(prompt("введіть кількість товару", "2"))
  const totalCost = cost * quantity
  const tax = 5
  const totalTax = (totalCost / 100) * tax

  const answer = document.querySelector(".answer")
  answer.innerHTML = `
  загальна вартість товару = ${totalCost},  ПДВ з вартості товару = ${totalTax}
  `
})
