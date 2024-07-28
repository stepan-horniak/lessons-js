"usestrict"
addEventListener("load", () => {
  const price = parseFloat(prompt("ведіть ціну товару", "20"))
  const amountMoney = parseFloat(prompt("введіть кількість грошей", "20"))
  const lottery = 4
  const residual = amountMoney - price
  const quantityLottery = Math.floor(residual / lottery)
  console.log(quantityLottery)
  if (price > amountMoney) alert("не вистачає грошей")
  if (residual > lottery)
    alert(
      `пропонуємо купити лотерею на залишок коштів ви можете купити ${quantityLottery} лотерей`
    )
})
