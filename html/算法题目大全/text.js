
async function fn1() {
  setTimeout(() => {
    console.log(1)
    resolve(1)
  }, 1000)
}

async function test() {
  await fn1()
}

test()