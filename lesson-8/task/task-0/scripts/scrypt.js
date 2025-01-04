"usestrict"

const ratingUser = [],
  userNumberRating = parseInt(prompt("скільки введете оцінок", "4"))

function addRatingUser(userNum) {
  for (let i = 1; i <= userNum; i++) {
    let score = parseInt(prompt(`введіть оціку № ${i}`, "4"))
    ratingUser.push(score)
  }
}

function getCategoryRatingAndAverage(scores) {
  let total = 0
  let hasTwo = false
  let hasThree = false

  for (let i = 0; i < scores.length; i++) {
    total += scores[i]

    if (scores[i] === 2) hasTwo = true
    else if (scores[i] === 3) hasThree = true
  }

  const average = total / scores.length

  let category
  if (hasTwo) {
    category = "Двійочник (має хоча би одну двійку)"
  } else if (hasThree) {
    category = "Трійочник (є хоча би одна трійка)"
  } else if (average === 5) {
    category = "Відмінник"
  } else {
    category = "Хорошист (оцінки добре і відмінно)"
  }
  return [category, average]
}

addRatingUser(userNumberRating)
document.querySelector(".answer").innerHTML = `
<p>масив оцінок ${ratingUser}</p>
<p>середній бал ${getCategoryRatingAndAverage(ratingUser)[1]}</p>
<p>категорія ${getCategoryRatingAndAverage(ratingUser)[0]}</p>`
