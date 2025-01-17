"use strict"

class Company {
  constructor(name, registrationNumber) {
    this.name = name
    this.registrationNumber = registrationNumber
  }
}

class Product {
  constructor(name, unit, quantity, company) {
    this.name = name
    this.unit = unit
    this.quantity = quantity
    this.company = company
  }
}

class Warehouse {
  constructor() {
    this.products = []
  }

  registerProduct(product) {
    this.products.push(product)
  }

  shipProduct(productName, quantity) {
    const product = this.products.find((el) => el.name === productName)
    if (!product) {
      throw new Error(`Товар ${productName} не знайдено на складі.`)
      return
    }

    if (product.quantity < quantity) {
      throw new Error(
        `Недостатньо кількості товару ${productName}. Доступно: ${product.quantity}`
      )
      return
    }

    product.quantity -= quantity
    console.log(
      `Відвантажено ${quantity} ${product.unit} товару ${productName}. Залишок: ${product.quantity}`
    )
  }

  filterByProductName(name) {
    return this.products.filter((product) => product.name === name)
  }

  filterByCompanyName(companyName) {
    return this.products.filter(
      (product) => product.company.name === companyName
    )
  }
}

const company1 = new Company("Company 1", 1001)
const company2 = new Company("Company 2", 1002)

const product1 = new Product("Сіль", "кг", 50, company1)
const product2 = new Product("Цукор", "кг", 100, company2)
const product3 = new Product("Сіль", "кг", 30, company2)

try {
  const warehouse = new Warehouse()

  warehouse.registerProduct(product1)
  warehouse.registerProduct(product2)
  warehouse.registerProduct(product3)

  console.log("Фільтрація за назвою товару 'Сіль':")
  console.log(warehouse.filterByProductName("Сіль"))

  console.log("Фільтрація за назвою фірми 'Company 2':")
  console.log(warehouse.filterByCompanyName("Company 2"))

  warehouse.shipProduct("Сіль", 20)
  warehouse.shipProduct("Сіль", 50)
  warehouse.shipProduct("Цукор", 30)
} catch (error) {
  console.log(error.message)
}
