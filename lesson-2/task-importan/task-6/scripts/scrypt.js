"usestrict"
addEventListener("load", () => {
  const costFirstProduct = parseInt(prompt("введіть вартість 1 товару", "100"))
  const quantityFirstProduct = parseInt(
    prompt("введіть кількість 1 товару", "1")
  )

  const costSecondProduct = parseInt(prompt("введіть вартість 1 товару", "200"))
  const quantitySecondProduct = parseInt(
    prompt("введіть кількість 1 товару", "2")
  )
  const costThirdProduct = parseInt(prompt("введіть вартість 1 товару", "300"))
  const quantityThirdProduct = parseInt(
    prompt("введіть кількість 1 товару", "3")
  )

  const totalFirstProduct = costFirstProduct * quantityFirstProduct
  const totalSecondProduct = costSecondProduct * quantitySecondProduct
  const totalThirdProduct = costThirdProduct * quantityThirdProduct

  const total = totalFirstProduct + totalSecondProduct + totalThirdProduct
  const answer = document.querySelector(".answer")
  answer.innerHTML = `
 <table>
        <thead>
            <th>вартість за шт.</th>
            <th>кількість од.</th>
            <th>ціна</th>
        </thead>
        <tbody>
            <tr>
                <th>${costFirstProduct}</th>
                <th>${quantityFirstProduct}</th>
                <th>${totalFirstProduct}</th>

            </tr>
           <tr>
                <th>${costSecondProduct}</th>
                <th>${quantitySecondProduct}</th>
                <th>${totalSecondProduct}</th>

            </tr>
            <tr>
                <th>${costThirdProduct}</th>
                <th>${quantityThirdProduct}</th>
                <th>${totalThirdProduct}</th>

            </tr>
             <tr>
                <th>загалом</th>
                <th>${total}</th>
                

            </tr>
        </tbody>
    </table>
    <div>
    </div>
  `
})
