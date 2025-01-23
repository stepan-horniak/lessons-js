window.addEventListener("load", () => {
  // .count-minus
  // .count-text
  // .count-plus
  const container = document.querySelector(".container")
  container.addEventListener("click", (e) => {
    const element = e.target
    let priceSum = 0
    if (element.closest(".count-minus")) {
      const findFather = element.closest(".cart-product")
      const currentElCount = findFather.querySelector(".count-text")

      if (currentElCount.textContent > 0) {
        parseInt(currentElCount.textContent--)
        //================
        if (findFather) {
          const currentElSum = findFather.querySelector(".prices-sum")
          priceSum =
            parseFloat(currentElSum.textContent) *
            parseFloat(currentElCount.textContent)
          currentElSum.textContent = priceSum
        }
      }
    }
    if (element.closest(".count-plus")) {
      const findFather = element.closest(".cart-product")
      const currentElCount = findFather.querySelector(".count-text")

      parseInt(currentElCount.textContent++)
      //================
      if (findFather) {
        const currentElSum = findFather.querySelector(".prices-sum")
        priceSum =
          parseFloat(currentElSum.textContent) *
          parseFloat(currentElCount.textContent)
        currentElSum.textContent = priceSum
      }
    }

    //========
  })

  //======
})

// .container
// .row
// .cart-product
// .product
// .product-image
// .product-text
// .count
// .count-minus
// .count-text
// .count-plus
// .prices
// .prices-text
// .prices-sum
// .checkbox
// .total
// .total-price
