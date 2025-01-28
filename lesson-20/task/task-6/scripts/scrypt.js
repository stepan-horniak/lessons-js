window.addEventListener("load", () => {
  class Product {
    constructor(
      countProduct,
      totalSumProduct,
      checkbox,
      totalSumCart,
      containerCart
    ) {
      this.countProduct = document.getElementsByClassName(countProduct)
      this.totalSumProduct = document.getElementsByClassName(totalSumProduct)
      this.checkbox = document.getElementsByClassName(checkbox)
      this.totalSumCart = document.querySelector(totalSumCart)
      this.containerCart = document.querySelector(containerCart)
      this.sumProduct()
      this.totalSum()
    }

    count(el) {
      const currentElement = el.closest(".cart-product")
      if (el.classList.contains("count-minus")) {
        let count = currentElement.querySelector(".count-text")
        if (parseInt(count.textContent) > 0) {
          count.textContent = parseInt(count.textContent) - 1
        }
      }
      if (el.classList.contains("count-plus")) {
        let count = currentElement.querySelector(".count-text")
        count.textContent = parseInt(count.textContent) + 1
      }
    }

    checkboxActive() {
      for (const el of this.checkbox) {
        if (!el.checked) {
          el.closest(".cart-product").remove()
        }
      }

      this.totalSum()
    }

    sumProduct() {
      for (let i = 0; i < this.countProduct.length; i++) {
        const price =
          parseFloat(this.totalSumProduct[i].getAttribute("price")) || 0
        const quantity = parseInt(this.countProduct[i].textContent) || 0
        this.totalSumProduct[i].textContent = quantity * price + " грн"
      }
    }

    totalSum() {
      let sum = 0

      for (const element of this.totalSumProduct) {
        sum += parseFloat(element.textContent) || 0
      }
      this.totalSumCart.textContent = sum + " грн"
    }

    click() {
      this.containerCart.addEventListener("click", (e) => this.render(e))
    }

    render(e) {
      this.el = e.target
      if (
        this.el.classList.contains("count-plus") ||
        this.el.classList.contains("count-minus")
      ) {
        this.count(this.el)
        this.sumProduct()
        this.totalSum()
      }
      if (this.el.classList.contains("checkbox")) {
        this.checkboxActive()
      }
    }
  }

  const product = new Product(
    "count-text",
    "prices-sum",
    "checkbox",
    ".total-price",
    ".container"
  )
  product.click()
})
