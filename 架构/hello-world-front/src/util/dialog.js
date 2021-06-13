const Modal = (function() {
    let modal = null
    return function() {
      if(!modal) {
        modal = document.createElement('div')
        modal.innerHTML = '我是全局唯一的modal'
        modal.id = 'modal'
        modal.style.display = 'none'
        document.body.appendChild(modal)
      }
      return modal
    }
  })()

export default Modal