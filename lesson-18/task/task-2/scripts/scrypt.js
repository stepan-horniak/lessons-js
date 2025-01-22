"use strict"

// function convert(courseUsd, courseEuro) {
//   const sumGrn = parseFloat(document.getElementById("sumGrn").value)
//   let sumUsd = document.getElementById("sumUsd")
//   let sumEuro = document.getElementById("sumEuro")

//   sumEuro.value = sumGrn / courseEuro
//   sumUsd.value = sumGrn / courseUsd
// }

class Convert {
  constructor(courseUsd, courseEuro) {
    this.courseUsd = courseUsd
    this.courseEuro = courseEuro
  }
  getConvertHrnTo() {
    const sumGrn = parseFloat(document.getElementById("sumGrn").value)
    let sumUsd = document.getElementById("sumUsd")
    let sumEuro = document.getElementById("sumEuro")
    sumUsd.value = sumGrn / this.courseUsd
    sumEuro.value = sumGrn / this.courseEuro
  }
}

window.onload = function () {
  const convert = new Convert(40, 45)
  document.getElementById("convert").onclick = () => convert.getConvertHrnTo()
}
