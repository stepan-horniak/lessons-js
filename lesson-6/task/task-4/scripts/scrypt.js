"usestrict"
addEventListener("load", function () {
  const answer = document.querySelector(".answer")
  let userNumber = parseInt(
    prompt("введіть скільки людей відвідало спортзал", "4")
  )
  let oldUser = 0
  let youngUser = 1000
  let averageUser = 0
  let averageUserNumber
  let userAge
  for (let user = 1; user <= userNumber; user++) {
    userAge = parseInt(prompt(`введіть вік користувача № ${user}`, "25"))
    oldUser < userAge ? (oldUser = userAge) : null
    youngUser > userAge ? (youngUser = userAge) : null
    averageUser += userAge
  }
  averageUserNumber = Math.floor(averageUser / userNumber)
  answer.insertAdjacentHTML(
    "beforeend",
    `наймолодший користувач ${youngUser}, найстарший користувач ${oldUser}, середній вік ${averageUserNumber}`
  )
})
