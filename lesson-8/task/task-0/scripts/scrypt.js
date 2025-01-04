"usestrict"

const ratingUser = [],
  userNumberRating = parseInt(prompt("скільки введете оцінок", "4"))

function addRatingUser(userNum) {
  for (let i = 1; i <= userNum; i++) {
    let score = parseInt(prompt(`введіть оціку № ${i}`, "4"))
    ratingUser.push(score)
  }
}

function getAverageRating(scores) {
  let total = 0
  for (let i = 0; i < scores.length; i++) {
    total += scores[i]
  }
  return total / scores.length
}

function getCategoryRating(scores) {
  let minScore = Math.min(...scores)

  let category = ``
  switch (minScore) {
    case 2:
      category += `Двійочник`
      break

    case 3:
      category += `Трійочник`
      break
    case 4:
      category += `Хорошист`
      break
    case 5:
      category += `Відмінник`
      break
  }

  return category
}
addRatingUser(userNumberRating)
document.querySelector(".answer").innerHTML = `
<p>масив оцінок ${ratingUser}</p>
<p>середній бал ${getAverageRating(ratingUser)}</p>
<p>категорія ${getCategoryRating(ratingUser)}</p>`
