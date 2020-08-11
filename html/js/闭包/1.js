function text() {
  let count = 0
  function a() {
    count++
    console.log(count);
  }
  return a
}

let result = text()
result()
result()
result()
result()

