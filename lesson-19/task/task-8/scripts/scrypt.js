window.addEventListener("load", () => {
  function writePrice() {
    const sumList = document.querySelectorAll(".prices-sum")
    for (const element of sumList) {
      element.textContent = parseFloat(element.getAttribute("price")) + "грн"
    }
  }

  writePrice()

  function calcTotalSum() {
    const totalPrice = document.querySelector(".total-price")
    const sumList = document.querySelectorAll(".prices-sum")

    let totalSum = 0
    for (const element of sumList) {
      if (element.nextElementSibling.checked) {
        totalSum += parseFloat(element.textContent)
      }
    }
    totalPrice.textContent = totalSum + "грн"
  }
  calcTotalSum()

  //=============================

  function clickCarts(e) {
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
            parseFloat(currentElSum.getAttribute("price")) *
            parseFloat(currentElCount.textContent)
          currentElSum.textContent = priceSum + "грн"
          calcTotalSum()
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
          parseFloat(currentElSum.getAttribute("price")) *
          parseFloat(currentElCount.textContent)
        currentElSum.textContent = priceSum + "грн"
        calcTotalSum()
      }
    }
    if (element.hasAttribute("type")) {
      calcTotalSum()
    }
  }
  const container = document.querySelector(".container")
  container.addEventListener("click", clickCarts)
})
