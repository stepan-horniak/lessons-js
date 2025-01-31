window.addEventListener("load", () => {
  //============
  const arrayText = [
    "Сьогодні на вулиці +25 градусів, сонце світить, хмари відсутні, настрій чудовий.",
    "У магазині залишилося 3 буханки хліба, 7 пляшок молока, 1 пакет кави.",
    "Мій друг пробіг 10 кілометрів за 42 хвилини і 15 секунд.",
    "Ціна акцій зросла на 5% за останні 3 дні, аналітики здивовані.",
    "Мобільний телефон працює 24 години без зарядки, батарея тримається чудово.",
    "Я купив 2 книги, 4 блокноти і 1 ручку для навчання.",
    "У місті відкрили 6 нових ресторанів, кожен з унікальним меню.",
    "Наш клас складається з 30 учнів, але сьогодні прийшли лише 27.",
    "На стадіоні зібралося 50 000 фанатів, матч був дуже захопливим.",
    "Через 8 днів почнеться відпустка, ми вже купили квитки на літак.",
    "Вечірнє небо забарвлене в помаранчевий, птахи летять додому, вітер слабкий.",
    "На столі лежить книга, чашка кави, поруч горить свічка.",
    "Море тихе, хвилі ледве відчутні, чайки літають, на пляжі людей мало.",
    "Осінь подарувала різнокольорове листя, дерева стоять у золоті, повітря свіже.",
    "Музика грає тихо, за вікном дощ, теплий плед огортає плечі.",
    "Штм пшк з мсц.",
  ]
  const stringText1 =
    "Наш клас «4142-3433-2323-3434» складається з 30 учнів, але сьогодні 27,43.3242 прийшли лише 27.«4142333-3433-2323-3434»"
  //===========1,2,3,4,5============
  class ShowString {
    constructor(arrText) {
      this.arrText = arrText
    }
    createWrapper() {
      const divEl = document.createElement("div")
      divEl.style.border = "3px solid black"

      this.wrapperEl = divEl
      return divEl
    }
    createElementWrapper(arr) {
      const listEl = document.createElement("ol")
      for (const element of arr) {
        const itemEl = document.createElement("li")
        itemEl.append(element)

        listEl.append(itemEl)
      }
      return listEl
    }
    showElementsHasNumber() {
      return this.arrText.filter((el) => /[0-9]/g.test(el))
    }
    showElementsNotNumber() {
      return this.arrText.filter((el) => !/[0-9]/g.test(el))
    }
    showElementsHasVowelsLetters() {
      return this.arrText.filter((el) => /[аеєиіїоуюя]/gi.test(el))
    }
    showElementsNoVowelsLetters() {
      return this.arrText.filter((el) => !/[аеєиіїоуюя]/gi.test(el))
    }
    showElementsHasNumber1Or3() {
      return this.arrText.filter((el) => /(\s1\s|\s3\s)/g.test(el))
    }
    render(container) {
      this.container = document.querySelector(container)

      this.createWrapper()

      this.wrapperEl.append(
        this.createElementWrapper(this.showElementsHasNumber())
      )
      this.wrapperEl.append(
        this.createElementWrapper(this.showElementsNotNumber())
      )
      this.wrapperEl.append(
        this.createElementWrapper(this.showElementsHasVowelsLetters())
      )
      this.wrapperEl.append(
        this.createElementWrapper(this.showElementsNoVowelsLetters())
      )
      this.wrapperEl.append(
        this.createElementWrapper(this.showElementsHasNumber1Or3())
      )

      this.container.append(this.wrapperEl)
    }
  }
  const showString = new ShowString(arrayText)
  showString.render(".container")
  //===============6,7,8,9,10,11==============================
  class ShowText {
    constructor(text) {
      this.text = text
    }
    createWrapper(el) {
      const divEl = document.createElement("div")
      divEl.style.border = "3px solid black"

      divEl.append(el)

      this.wrapperEl = divEl
      return divEl
    }

    showAllNumbersInString() {
      return this.text.match(/[0-9]/g)
    }
    showAllPunctuationMarks() {
      return this.text.match(/[.,;:!?]/g)
    }
    showComponentsDividedPunctuationMarks() {
      return this.text.match(/[\w'’]+|[^\w\s]+/g)
    }
    showComponentsDate() {
      return this.text.match(/\s\d{2}.\d{2}.\d{4}\s/g)
    }
    countNumberTwodigitNumber() {
      return this.text.match(/\b\d{2}\b/g)
    }
    searchCardNumber() {
      return this.text.match(/\b\d{4}\b[-]\b\d{4}\b[-]\b\d{4}\b[-]\b\d{4}\b/g)
    }
    render(container) {
      this.container = document.querySelector(container)

      this.container.append(this.createWrapper(this.showAllNumbersInString()))
      this.container.append(this.createWrapper(this.showAllPunctuationMarks()))
      this.container.append(
        this.createWrapper(this.showComponentsDividedPunctuationMarks())
      )
      this.container.append(this.createWrapper(this.showComponentsDate()))
      this.container.append(
        this.createWrapper(this.countNumberTwodigitNumber())
      )
      this.container.append(this.createWrapper(this.searchCardNumber()))

      //=================
      this.container.append(this.wrapperEl)
    }
  }
  const showText = new ShowText(stringText1)
  showText.render(".container")
  //==========12===============

  const str = "https://www.rada.gov.ua/"
  function checkNameSite(strSite) {
    return /\bgov\b/.test(str)
  }
  console.log(checkNameSite(str))
  //=============13================
  const str2 = "2021,1424,3234,2025,1995,3232323"
  function searchYearsMore2021(strSite) {
    const arr = strSite.match(/\b\d{4}\b/g)
    return arr.filter((el) => parseFloat(el) > 2021)
  }
  console.log(searchYearsMore2021(str2))
  //==============14===================
  const phones =
    "+38098-123-4567, 032-987-6543, +38067-345-6789, 050-555-1212, 044-111-2233"

  function searchNumberTel(numberPhones) {
    const cleanPhones = numberPhones.replace(/[-,.;:?\s]/g, "")

    const numbers = cleanPhones.match(/\+38\d{10}/g)

    return numbers
  }
  console.log(searchNumberTel(phones))
  //==============15================
  function changeFullNameUser(inputId) {
    const input = document.getElementById(inputId)
    input.addEventListener("change", (e) => {
      const el = e.target
      el.value = el.value.replaceAll(" ", "-")
    })
  }
  changeFullNameUser("inputFullName")
  //=================16===============
  function changeDate(inputId) {
    const input = document.getElementById(inputId)
    input.addEventListener("change", (e) => {
      const el = e.target
      el.value = el.value.replaceAll(".", "/")
    })
  }
  changeDate("inputDate")
  //============17===========
  function determinedDayOrWeekend(inputId) {
    const input = document.getElementById(inputId)
    input.addEventListener("change", (e) => {
      const el = e.target
      if (
        parseInt(el.value) === 5 ||
        parseInt(el.value) === 6 ||
        el.value.toLocaleLowerCase() === "sun" ||
        el.value.toLocaleLowerCase() === "sat"
      )
        el.value = "вихідний"
      else el.value = "іди працюй"
    })
  }
  determinedDayOrWeekend("inputNumberDay")
})
