// 实现storage，使得该对象为单例，
// 基于localstorage进行封装，实现方法setitem(key,value)和getitem(key)

// class Storage {
//   static getInstance() {
//     if(Storage.instance) {
//     Storage.instance = new Storage()
//     }
//     return Storage.instance
//   }
//   setItem(key, value) {
//     return localStorage.setItem(key,value)
//   }
//   getItem(key) {
//     return localStorage.getItem(key)
//   }
// }


  function StorageBase() {}
  StorageBase.prototype.getItem = function(key) {
    return localStorage.getItem(key)
  }
  StorageBase.prototype.setItem = function(key, value) {
    return localStorage.setItem(key,value)
  }
  const Storage = (function() {
    let instance = null
    return function() {
      if(!instance) {
        instance = new StorageBase()
      }
      return instance
    }
  })()



const storage1 = new Storage()
storage1.setItem('name', 'wn')
storage1.getItem('name')