"usestrict"

const nameStudent = ["вася", "іван", "юля", "маша", "іван"]

function countNameIvan(arr) {
  let count = 0
  for (const element of arr) {
    if (element === `іван`) {
      count++
    }
  }
  return count
}

document.querySelector(".answer").innerHTML = `<p>масив : [${nameStudent}]</p>
<p>імя Іван зустрічається : ${countNameIvan(nameStudent)} рази</p>`
