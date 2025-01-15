"usestrict"
let array = [1, 2, 3]

function generate(arr, res) {
  if (arr.length === 0) console.log(`[${res}] `)
  else {
    generate(arr.slice(1), [...res]) //формуємо новий підмасив без першого елемента arr[0]
    generate(arr.slice(1), [...res, arr[0]]) //формуємо новий підмасив з першим елементом arr[0]
  }
}

//         0  1  2
let arr = [1, 2, 3] //arr.slice(1)   => [ 2, 3 ]
generate(arr, [])
