selectionSort([1,4,71,315,61,67])

function selectionSort(array) {
  let min = 0
  for(let i = 1;i< array.length;i++){
    if(array[min] > array[i]){
      swap(min,i)
    }
  }
}

function swap(a,b){
  let temp = a
  a = b
  b = temp
  console.log(a);
  console.log(b);
}

console.log(1,2);