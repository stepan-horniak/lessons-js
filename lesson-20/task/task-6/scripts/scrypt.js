window.addEventListener("load", () => {
  //========================
  class Product {
    constructor(countText, totalSumProduct, checkbox, totalSumEl) {
      this.countText = document.querySelectorAll(countText)
      this.totalSumProduct = document.querySelectorAll(totalSumProduct)
      this.checkbox = document.querySelectorAll(checkbox)
      this.totalSumEl = document.querySelector(totalSumEl)
    }

    countProduct(e) {
      const el = e.target
      const currentElement = el.closest(".cart-product")

      if (el.classList.contains("count-minus")) {
        let count = currentElement.querySelector(".count-text")
        if (parseInt(count.textContent) > 0) {
          count.textContent = parseInt(count.textContent) - 1
          this.sumProduct()
        }
      }

      if (el.classList.contains("count-plus")) {
        let count = currentElement.querySelector(".count-text")
        count.textContent = parseInt(count.textContent) + 1
        this.sumProduct()
      }
      if (el.classList.contains("checkbox")) {
        this.checkboxActive()
      }
    }
    checkboxActive() {
      this.checkbox.forEach((el) => {
        if (!el.checked) {
          el.closest(".cart-product").remove()
        }
      })
    }
    sumProduct() {
      this.countText.forEach((el, index) => {
        const price = parseFloat(
          this.totalSumProduct[index].getAttribute("price")
        )
        const quantity = parseInt(el.textContent)
        this.totalSumProduct[index].textContent = quantity * price + " грн"
      })
    }
    totalSum() {
      let sum = 0
      for (const element of this.totalSumProduct) {
        sum += parseFloat(element.textContent)
        console.log(parseFloat(element.textContent))
      }

      this.totalSumEl.textContent = sum
    }
  }

  //========================
  class ProductManager extends Product {
    constructor(containerCart, totalSumCart) {
      super(".count-text", ".prices-sum", ".checkbox", ".total-price")
      this.totalSumCart = document.querySelector(totalSumCart)
      this.containerCart = document.querySelector(containerCart)
      this.sumProduct()
      this.clickCart()
      this.checkboxActive()
      this.totalSum()
    }

    clickCart() {
      this.containerCart.addEventListener("click", (e) => this.countProduct(e))
    }

    render() {}
  }

  const productManager = new ProductManager(".container")
  //========================
})
