"usestrict"
addEventListener("load", () => {
  const firstUserName = prompt("ведіть перше імяє", "ivan")
  const firstNumberСandies = parseInt(prompt("введіть кількість цукерок", "7"))

  const secondUserName = prompt("ведіть друге імяє", "petro")
  const secondNumberСandies = parseInt(
    prompt("введіть кількість цукерок", "10")
  )
  if (firstNumberСandies > secondNumberСandies)
    alert(`У ${firstUserName} більше цукерок`)
  if (firstNumberСandies < secondNumberСandies)
    alert(`У ${secondUserName} більше цукерок`)
  if (firstNumberСandies === secondNumberСandies)
    alert(`кількість цукерок у ${firstUserName} і ${secondUserName} одинакова`)
})
