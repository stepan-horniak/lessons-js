"usestrict"
addEventListener("load", () => {
  let numberDayOfWeek = parseInt(prompt("введіть номер дня тижня", "3"))
  if (numberDayOfWeek > 7) alert("введені некоректні дані")
  if (numberDayOfWeek === 1) alert("понеділок")
  if (numberDayOfWeek === 2) alert("вівторок")
  if (numberDayOfWeek === 3) alert("середа")
  if (numberDayOfWeek === 4) alert("четверг")
  if (numberDayOfWeek === 5) alert("пятниця")
  if (numberDayOfWeek === 6) alert("субота")
  if (numberDayOfWeek === 7) alert("неділя")
})
