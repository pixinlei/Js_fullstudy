let dialog
const toast = function (data = {
  title: '这里是默认标题',
  message: '这里是默认内容'
}) {
  let titleContent = data.title
  let message = data.message
  return function () {
    if (!dialog) {
      // 这里是整个的toast弹出框
      dialog = document.createElement('div')
      dialog.style.width = '400px'
      // dialog.style.background = 'red'
      dialog.style.position = 'absolute'
      dialog.style.top = '50%'
      dialog.style.left = '50%'
      dialog.style.borderRadius = '7px'
      dialog.style.overflow = 'hidden'
      dialog.style.display = 'none'
      dialog.style.border = '1px solid #DCDFE6'
      dialog.style.transform = 'translate(-50%, -50%)'
      const toast = window.document.getElementById('dialog')
      toast?.appendChild(dialog)
      // 弹窗顶部标题
      const title = document.createElement('div')
      title.style.borderBottom = '1px solid #DCDFE6'
      title.style.width = '400px'
      title.style.minHeight = '50px'
      title.style.display = 'flex'
      title.style.justifyContent = 'center'
      title.style.lineHeight = '40px'
      title.style.boxSizing = 'border-box'
      title.style.padding = '5px'
      title.innerHTML = titleContent
      // title.style.background = 'yellowgreen'
      title.style.position = 'relative'
      title.style.fontSize = '18px'
      title.style.fontWeight = '500'
      // console.log(dialog);
      dialog?.appendChild(title)
      // 弹窗内容区域
      const content = document.createElement('div')
      content.style.borderBottom = '1px solid #DCDFE6'
      content.style.width = '400px'
      content.style.minHeight = '200px'
      content.style.position = 'relative'
      content.style.lineHeight = '25px'
      content.style.boxSizing = 'border-box'
      content.style.padding = '10px'
      content.style.letterSpacing = '2px'
      content.innerHTML = message
      dialog?.appendChild(content)

      // 弹窗按钮区域
      const buttons = document.createElement('div')
      // buttons.style.border = '1px solid #DCDFE6'
      buttons.style.width = '400px'
      buttons.style.height = '50px'
      buttons.style.position = 'relative'
      buttons.style.boxSizing = 'border-box'
      buttons.style.padding = '5px'
      buttons.style.paddingLeft = '30px'
      buttons.style.paddingRight = '30px'
      // buttons.style.background = 'pink'
      buttons.style.display = 'flex'
      buttons.style.alignItems = 'center'
      buttons.style.justifyContent = 'space-between'
      dialog?.appendChild(buttons)

      // 确认按钮
      const comformBtn = document.createElement('div')
      comformBtn.style.border = '1px solid #DCDFE6'
      comformBtn.setAttribute('id', 'comformBtn')
      comformBtn.style.width = '70px'
      comformBtn.style.height = '30px'
      comformBtn.style.borderRadius = '7px'
      comformBtn.style.position = 'relative'
      comformBtn.style.cursor = 'pointer'
      // comformBtn.style.background = 'gold'
      comformBtn.style.display = 'flex'
      comformBtn.style.alignItems = 'center'
      comformBtn.style.justifyContent = 'center'
      comformBtn.innerHTML = '确认'
      buttons?.appendChild(comformBtn)

      // 关闭按钮
      const closeBtn = document.createElement('div')
      closeBtn.style.border = '1px solid #DCDFE6'
      closeBtn.setAttribute('id', 'closeBtn')
      closeBtn.style.cursor = 'pointer'
      closeBtn.style.width = '70px'
      closeBtn.style.height = '30px'
      closeBtn.style.borderRadius = '7px'
      closeBtn.style.position = 'relative'
      // closeBtn.style.background = 'gold'
      closeBtn.style.display = 'flex'
      closeBtn.style.alignItems = 'center'
      closeBtn.style.justifyContent = 'center'
      closeBtn.innerHTML = '关闭'
      buttons?.appendChild(closeBtn)

    }
    return dialog
  }()
}
const close = function () {
  document.getElementById('closeBtn').addEventListener('click', function () {
    const modal = new toast()
    modal.style.display = 'none'
  })
}

const show = function () {
  const modal = new toast()
  modal.style.display = 'block'
  close()
}

const comform = function (fn) {
  document.getElementById('comformBtn').addEventListener('click', function () {
    fn()
    const modal = new toast()
    modal.style.display = 'none'
  })
}
export {
  toast,
  // close,
  comform,
  show
}