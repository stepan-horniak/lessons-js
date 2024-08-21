"usestrict"
addEventListener("load", function () {
  let ratingStudents = [2, 4, 5, 3, 2, 4, 5, 3, 4]
  function deuces(array) {
    count = 0
    for (const element of array) {
      if (element === 2) count++
    }
    return count
  }
  function goodGrades(array) {
    count = 0
    for (const element of array) {
      if (element === 4 || element === 5) count++
    }

    return count
  }
  function belowAverage(array) {
    count = 0
    for (const element of array) {
      if (element === 3) count++
    }

    return count
  }
  document.querySelector(".answer").insertAdjacentHTML(
    "beforeend",
    `
    <p> оцінки учня : let ratingStudents = [2, 4, 5, 3, 2, 4, 5, 3, 4]</p>
        <p>двійок : ${deuces(ratingStudents)}</p>
    <p>кількість хороших оцінок (добре, відмінно) : ${goodGrades(
      ratingStudents
    )}</p>
    <p>кількість оцінок, які нижче середнього : ${belowAverage(
      ratingStudents
    )}</p>
    `
  )
})
