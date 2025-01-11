"usestrict"
function iterationNumberMonth(min = 1, max = 12) {
  let count = min - 1
  function innerCountMonth() {
    if (count === max) count = min - 1
    count++

    return count
  }

  return innerCountMonth
}

let iterMonth = iterationNumberMonth()

for (let index = 0; index < 25; index++) {
  console.log(iterMonth())
}
