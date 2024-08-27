"usestrict"
addEventListener("load", function () {
  const numbersAuto = [
    "aa3454ab",
    "be432kk",
    "ao2345ao",
    "oa123oa",
    "op555ka",
    "aa456yi",
  ]
  let startingWithA = numbersAuto.filter((num) => num.startsWith("a"))

  document.querySelector(".answer").insertAdjacentHTML(
    "beforeend",
    `<p>масив номерів : ${numbersAuto}</p> <p>
    новий масив : ${startingWithA}</p>`
  )
})
