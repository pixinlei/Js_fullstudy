function changeTrain() {
  this.array = []

  for (let j = array.length - 1; j >= 0; j--) {
    for (let i = 0; i < j; i++) {
      let temp = array[i]
      array[i] = array[i + 1]
      array[i + 1] = temp
    }
  }
}
