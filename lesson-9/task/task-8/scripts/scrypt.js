"usestrict"
addEventListener("load", function () {
  const numbersAuto = [
    "Aa3454ab",
    "be432kk",
    "ao2345ao",
    "oa123oa",
    "op555ka",
    "Aa456yi",
  ]
  let startingWithA = numbersAuto.filter((num) =>
    num.toLocaleLowerCase().startsWith("a")
  )

  document.querySelector(".answer").insertAdjacentHTML(
    "beforeend",
    `<p>масив номерів : ${numbersAuto}</p> <p>
    новий масив : ${startingWithA}</p>`
  )
})
