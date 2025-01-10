"usestrict"

let names = ["John", "Sa", "Nina", "M", "Eva", "Chris", "Max", "Ed", "Eva"]

function bubleSort(arr) {
  let rearranged
  do {
    rearranged = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].length > arr[i + 1].length) {
        const swap = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = swap
        rearranged = true
      }
    }
  } while (rearranged)
  return arr
}

let sortedNames = bubleSort(names)
function binarySearch(arr, numberName, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1
  }
  let middle = Math.floor((start + end) / 2)

  if (arr[middle].length === numberName) {
    return middle
  } else if (arr[middle].length > numberName) {
    return binarySearch(arr, numberName, start, middle - 1)
  } else {
    return binarySearch(arr, numberName, middle + 1, end)
  }
}

document.querySelector(".answer").innerHTML = `

<div>масив : ${names}</div>
<div>імя 'Olga' під індексом : ${binarySearch(sortedNames, 5)}</div>
`
