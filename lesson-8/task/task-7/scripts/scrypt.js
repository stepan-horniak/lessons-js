"usestrict"
const productPrices = [1000, 20, 31],
  productTitles = ["cheese", "juice", "bread"]
let userMoney = parseInt(prompt("введіть кількість грошей", "40"))

function getAllowProduct(pricesArr, productArr, moneyUser) {
  let result = ``
  for (let i = 0; i < pricesArr.length; i++) {
    if (moneyUser >= pricesArr[i]) {
      result += `${productArr[i]},`
    }
  }
  return result
}

document.querySelector(
  ".answer"
).innerHTML = ` можете купити : ${getAllowProduct(
  productPrices,
  productTitles,
  userMoney
)}
`
