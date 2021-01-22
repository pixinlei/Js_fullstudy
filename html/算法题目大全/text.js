// @ts-ignore
Promise.limitAll = function (promiseCreators, max) {
  let i = 0, count = 0, pending = 0, res = [];
  return new Promise((resolve, reject) => {
    function requestWork() {
      if (count >= promiseCreators.length) {
        resolve(res);
      }
      while (pending < max && i < promiseCreators.length) {
        const creator = promiseCreators[i];
        let index = i;
        creator().then((r) => {
          pending--;
          count++;
          res[index] = r;  // 
          requestWork();
        })
        i++;
        pending++;
      }
    }
    requestWork();
  })
}
