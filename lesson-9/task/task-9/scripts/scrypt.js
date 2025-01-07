"usestrict"
addEventListener("load", function () {
  const names = [
    "Тимофій",
    "тимур",
    "Богдан",
    "вікторія",
    "Олександра",
    "Соломія",
    "анастасія",
    "максим",
  ]

  let firstLetterNames = names.map((el) => el[0].toLocaleUpperCase())

  document
    .querySelector(".answer")
    .insertAdjacentHTML(
      "beforeend",
      `${names} <p>результат : ${firstLetterNames}</p>`
    )
})
