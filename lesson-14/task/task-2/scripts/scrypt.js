"usestrict"

let date = {
  year: 2025,
  month: 1,
  day: 13,
}

function getYearMonthsLeter(object, monthNum) {
  object.year = Math.floor(monthNum / 12) + object.year

  object.month = ((object.month - 1 + monthNum) % 12) + 1

  return object
}

console.log(getYearMonthsLeter(date, 15))
