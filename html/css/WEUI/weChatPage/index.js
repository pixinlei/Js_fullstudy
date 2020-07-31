let send = document.getElementById('send')
let parent = document.getElementById('content-items')

send.addEventListener('click',function(){
  let li = document.createElement('li')
  li.setAttribute('class','content-item')

  let divPic = document.createElement('div')
  divPic.setAttribute('class','pic')
  li.appendChild(divPic)
  let img = document.createElement('img')
  img.setAttribute('src','./images/user.jpg')
  divPic.appendChild(img)
  let message = document.createElement('div')
  message.setAttribute('class','message')
  li.appendChild(message)
  let p1 = document.createElement('p')
  p1.setAttribute('class','name')
  p1.innerHTML = 'aaaaaaaaaaaaaaa'
  message.appendChild(p1)
  let p2 = document.createElement('p')
  p2.setAttribute('class','detail')
  p2.innerHTML = 'bbbbbbbbbb'
  message.appendChild(p2)
    // console.log(li);
    parent.appendChild(li)
})
