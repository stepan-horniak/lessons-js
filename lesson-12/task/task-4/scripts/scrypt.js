"usestrict"

let arrayNumbers = [44, 8, 65, 5, 2, 13]

function sortBuble(arr) {
  let array = [...arr]
  let rearranged
  let show = ``
  do {
    rearranged = false
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        let b = array[i - 1]
        array[i - 1] = array[i]
        array[i] = b
        show += `<div>${array}
        </div>`

        rearranged = true
      }
    }
  } while (rearranged)
  return show
}

//==================================

function shakerSort(arr) {
  let array = [...arr]
  let leftIndex = 0
  let rightIndex = array.length - 1
  let show = ``
  while (leftIndex < rightIndex) {
    for (let i = leftIndex; i < rightIndex; i++) {
      if (array[i] > array[i + 1]) {
        const akum = array[i]
        array[i] = array[i + 1]
        array[i + 1] = akum
        show += `<div>${array}
        </div>`
      }
    }
    rightIndex--

    for (let i = rightIndex; i > leftIndex; i--) {
      if (array[i] < array[i - 1]) {
        const akum = array[i]
        array[i] = array[i - 1]
        array[i - 1] = akum
        show += `<div>${array}
        </div>`
      }
    }
    leftIndex++
  }

  return show
}

//===========================================

function insertSort(arr) {
  let array = [...arr]
  let show = ``

  for (let i = 1; i < array.length; i++) {
    let current = array[i]
    let j = i - 1
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j]
      j--
    }

    array[j + 1] = current

    show += `<div>${array.join(", ")}</div>`
  }

  return show
}

document.querySelector(".answer").innerHTML = `
<div>бульбашкове сортування</div>
<div> ${sortBuble(arrayNumbers)}</div>
<div>змішуванням сортування</div>
<div>${shakerSort(arrayNumbers)}</div>
<div>включенням сортування</div>
<div>${insertSort(arrayNumbers)}</div>
`
