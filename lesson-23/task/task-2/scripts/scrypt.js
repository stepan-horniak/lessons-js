window.addEventListener("load", () => {
  //============
  class PhoneNumber {
    constructor(number) {
      this.number = number
    }

    [Symbol.toPrimitive](hint) {
      let result
      if (hint === "string") {
        if (/^(066|095|099|050)/.test(this.number)) result = "vodafone"
        else if (/^(067|068|096|097|098)/.test(this.number)) result = "kyivstar"
        else if (/^(063|073|093)/.test(this.number)) result = "lifecell"
        else result = "Unknown operator"
      }
      return result
    }
  }
  const phoneNumber = new PhoneNumber("063")
  console.log(`${phoneNumber}`)

  //====================================
  class Product {
    static arrProduct = []

    constructor() {}

    static addGoods(productTitle, price, quantity) {
      Product.arrProduct.push({
        productTitle: productTitle,
        price: price,
        quantity: quantity,
      })
    }

    static getProducts() {
      return Product.arrProduct
    }
  }

  Product.addGoods("яблука", 20, 10)
  Product.addGoods("кефір", 30, 20)
  Product.addGoods("огірки", 50, 5)

  //=============================================
  class Shop {
    constructor(arrProduct) {
      this.arrProduct = arrProduct
    }

    [Symbol.iterator] = function () {
      let index = 0
      const products = this.arrProduct

      return {
        next() {
          if (index < products.length) {
            const product = products[index]
            index++
            return {
              value: `${product.productTitle} - ${
                product.price * product.quantity
              } грн`,
              done: false,
            }
          } else {
            return { done: true }
          }
        },
      }
    }
  }
  const shop = new Shop(Product.getProducts())
  for (const element of shop) {
    console.log(element)
  }
  //=====================================

  function* randomNumber(number = 5) {
    function getRandomNumbers(max = 10, min = 2) {
      let randNum = min + Math.floor(Math.random() * max)
      if (randNum % 2 === 0) {
        return randNum
      } else return randNum + 1
    }
    for (let i = 0; i < number; i++) {
      yield getRandomNumbers()
    }
  }
  let randGen = randomNumber()
  for (const element of randGen) {
    console.log(element)
  }
})
