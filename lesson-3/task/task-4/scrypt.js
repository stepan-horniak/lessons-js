"usestrict"
addEventListener("load", () => {
  let userAge = parseInt(prompt("введіть вік людини", "20"))

  if (userAge > 0 && userAge < 7) alert("ви дитина в садочку")
  if (userAge >= 7 && userAge < 15) alert("ви школяр")
  if (userAge >= 15 && userAge < 19) alert("ви студент")
  if (userAge >= 19 && userAge < 60) alert("ви працівник")
  if (userAge >= 60 && userAge < Infinity) alert("ви пенсіонер")
})
