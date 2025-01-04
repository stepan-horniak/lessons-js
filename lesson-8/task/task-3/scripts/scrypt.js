"usestrict"
addEventListener("load", function () {
  let ratingStudents = [2, 4, 5, 3, 2, 4, 5, 3, 4]
  function countNumberDeuces(array) {
    count = 0
    for (const element of array) {
      if (element === 2) count++
    }
    return count
  }
  function countGoodGrades(array) {
    count = 0
    for (const element of array) {
      if (element === 4 || element === 5) count++
    }

    return count
  }
  function countLessAverage(array) {
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
        <p>двійок : ${countNumberDeuces(ratingStudents)}</p>
    <p>кількість хороших оцінок (добре, відмінно) : ${countGoodGrades(
      ratingStudents
    )}</p>
    <p>кількість оцінок, які нижче середнього : ${countLessAverage(
      ratingStudents
    )}</p>
    `
  )
})
