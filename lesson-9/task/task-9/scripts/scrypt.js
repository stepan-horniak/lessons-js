"usestrict"
addEventListener("load", function () {
  const names = [
    "Тимофій",
    "Тимур",
    "Богдан",
    "Вікторія",
    "Олександра",
    "Соломія",
    "Анастасія",
    "Максим",
  ]

  let firstLetterNames = names.map(function (elem) {
    return elem[0]
  })

  document
    .querySelector(".answer")
    .insertAdjacentHTML(
      "beforeend",
      `${names} <p>результат : ${firstLetterNames}</p>`
    )
})
