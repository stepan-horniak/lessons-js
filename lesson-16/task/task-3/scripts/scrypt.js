"use strict"
const branches = [
  { country: "Україна", city: "Київ", street: "Хрещатик", houseNumber: 12 },
  {
    country: "Україна",
    city: "Львів",
    street: "Проспект Шевченка",
    houseNumber: 3,
  },
  {
    country: "Україна",
    city: "Одеса",
    street: "Дерибасівська",
    houseNumber: 8,
  },
  { country: "Україна", city: "Харків", street: "Сумська", houseNumber: 5 },
  {
    country: "Україна",
    city: "Дніпро",
    street: "Набережна Перемоги",
    houseNumber: 4,
  },
  {
    country: "Україна",
    city: "Запоріжжя",
    street: "Гагаріна",
    houseNumber: 10,
  },
  {
    country: "Україна",
    city: "Чернівці",
    street: "Буковинська",
    houseNumber: 2,
  },
  {
    country: "Україна",
    city: "Полтава",
    street: "Київський Шлях",
    houseNumber: 7,
  },
  {
    country: "Україна",
    city: "Житомир",
    street: "Майдан Перемоги",
    houseNumber: 1,
  },
  {
    country: "Україна",
    city: "Черкаси",
    street: "Грушевського",
    houseNumber: 6,
  },
  { country: "Україна", city: "Київ", street: "Хрещатик", houseNumber: 12 },
  {
    country: "Україна",
    city: "Львів",
    street: "Проспект Шевченка",
    houseNumber: 3,
  },
  {
    country: "Україна",
    city: "Одеса",
    street: "Дерибасівська",
    houseNumber: 8,
  },
  { country: "Україна", city: "Харків", street: "Сумська", houseNumber: 5 },
  {
    country: "Україна",
    city: "Дніпро",
    street: "Набережна Перемоги",
    houseNumber: 4,
  },
  {
    country: "Україна",
    city: "Запоріжжя",
    street: "Гагаріна",
    houseNumber: 10,
  },
  {
    country: "Україна",
    city: "Чернівці",
    street: "Буковинська",
    houseNumber: 2,
  },
  {
    country: "Україна",
    city: "Полтава",
    street: "Київський Шлях",
    houseNumber: 7,
  },
  {
    country: "Україна",
    city: "Житомир",
    street: "Майдан Перемоги",
    houseNumber: 1,
  },
  {
    country: "Україна",
    city: "Черкаси",
    street: "Грушевського",
    houseNumber: 6,
  },
]
const initiationYearMonth = [{ year: "2009", month: 7 }]
const services = [
  { name: "Консультація IT", price: 1000, duration: 2 },
  { name: "Розробка веб-сайту", price: 5000, duration: 15 },
  { name: "SEO оптимізація", price: 2000, duration: 7 },
  { name: "Маркетингові послуги", price: 3000, duration: 10 },
  { name: "Технічна підтримка", price: 1500, duration: 3 },
  { name: "Розробка мобільних додатків", price: 7000, duration: 30 },
  { name: "Фінансове консультування", price: 2500, duration: 5 },
  { name: "Графічний дизайн", price: 1800, duration: 4 },
  { name: "Інтернет-реклама", price: 2200, duration: 6 },
  { name: "ІТ-аудит", price: 4000, duration: 12 },
]
class Firm {
  #companyName
  #initiationYearMonth
  #services
  #addresBranches

  constructor(name, initiationYearMonth, services, addresBranches) {
    this.#companyName = name
    this.#initiationYearMonth = initiationYearMonth
    this.#services = services
    this.#addresBranches = addresBranches
  }

  getNumberYearsFirm() {
    const newDate = new Date()
    const currentYear = newDate.getFullYear()

    const initiationYear = this.#initiationYearMonth[0].year

    let years = currentYear - initiationYear
    return years
  }
  showAllBranchesInSiti(city) {
    return this.#addresBranches.filter(
      (element) => element.city.toLocaleLowerCase() === city.toLocaleLowerCase()
    )
  }

  showServices(money, numberDay) {
    let arrRes = this.#services.filter(
      (el) => el.price <= money && el.duration <= numberDay
    )
    return arrRes
      .map((service) => {
        return `${service.name}: ${service.price} грн, термін: ${service.duration} днів`
      })
      .join("<br>")
  }
}
const firm = new Firm("TechFirm", initiationYearMonth, services, branches)
firm.getNumberYearsFirm()

document.querySelector(".answer").innerHTML = firm.showServices(10000, 4)
// console.log(firm.showAllBranchesInSiti("львів"))
// console.log(firm.getNumberYearsFirm())
