"usestrict"
addEventListener("load", function () {
  function fibonacci(num) {
    let f = 0,
      f1 = 0,
      f2 = 1

    let arr = [0]
    for (let i = 1; i < num; i++) {
      f1 = f2
      f2 = f
      f = f1 + f2
      arr.push(f)
    }

    return arr
  }
  const userNumber = parseInt(prompt("введіть кількість чисел фібоначі", "15"))
  document
    .querySelector(".answer")
    .insertAdjacentHTML("beforeend", `числа фібоначі ${fibonacci(userNumber)}`)
})
