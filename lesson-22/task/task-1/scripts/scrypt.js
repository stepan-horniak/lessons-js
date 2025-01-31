window.addEventListener("load", () => {
  //============
  function colorBody() {
    document.body.style.backgroundColor = `${localStorage.getItem("color")}`
    sessionStorage.setItem("countChangeColor", 0)
  }
  colorBody()
  function changeColorCount() {
    let count = 0
    return function lockingFunk() {
      count++
      sessionStorage.setItem("countChangeColor", count)
    }
  }
  let changeColorBodyCount = changeColorCount()
  function changeColorBackgrounBody(inputId) {
    const input = document.getElementById(inputId)

    input.addEventListener("change", (e) => {
      localStorage.setItem("color", e.target.value)
      colorBody()
      changeColorBodyCount()
    })
  }
  changeColorBackgrounBody("inputColor")

  //====================================

  const arrCase = [
    "Купити продукти",
    "Приготувати обід",
    "Прибрати в кімнаті",
    "Прочитати 20 сторінок книги",
    "Виконати фізичні вправи",
    "Написати код для нового проєкту",
    "Відповісти на важливі повідомлення",
    "Запланувати справи на завтра",
    "Вийти на прогулянку",
    "Подивитися цікавий фільм",
    "Подивитися цікавий фільм",
  ]

  function addLocalStorage(arrCase) {
    for (let i = 0; i < arrCase.length; i++) {
      localStorage.setItem(`task${i}`, arrCase[i])
    }
  }
  addLocalStorage(arrCase)

  function randomCaseInLocalStorage() {
    const keys = Object.keys(localStorage).filter((key) => key !== "color")
    if (keys.length === 0) return null

    const randIndex = Math.floor(Math.random() * keys.length)
    return keys[randIndex]
  }
  setInterval(() => {
    const randomCaseKey = randomCaseInLocalStorage()
    if (!randomCaseKey) return

    const task = localStorage.getItem(randomCaseKey)
    const confirmed = confirm(task)

    if (confirmed) {
      localStorage.removeItem(randomCaseKey)
    }
  }, 10000)
  //====================================
})
