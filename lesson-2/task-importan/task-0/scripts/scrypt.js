"usestrict"
addEventListener("load", function () {
  const a = parseInt(prompt("введіть число А", "4"))
  const b = parseInt(prompt("введіть число B", "6"))
  const c = parseInt(prompt("введіть число C", "2"))

  const resultTask1 = a + 12 + b
  const resultTask2 = ((a + b) / 2) * a
  const resultTask22 = Math.sqrt(resultTask2)
  const resultTask3 = (a + b) * c
  const resultTask33 = Math.cbrt(resultTask3)
  const resultTask4 = a / -b
  const resultTask44 = Math.sin(resultTask4)

  const answer = document.querySelector(".answer-1")
  const answerText = `
    <div>
    S1 = ${a} + 12 + ${b} = ${resultTask1}
    </div>
    <div>   
    S2 = (a + b) / 2) * a = ${resultTask2} а корінь квадратний з ${resultTask2} 
    = ${resultTask22}
    </div>
    <div>
    S3 = (a + b) * c = ${resultTask3} а корінь кубічеий з ${resultTask3} = ${resultTask33}
    </div>
    <div>
    S4 = a - -b = ${resultTask4} а sin з ${resultTask4} = ${resultTask44}
    </div>
    `
  answer.innerHTML = answerText
})
