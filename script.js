let btn = document.querySelector('.btn'),
body = document.querySelector('body')
bulba2 = document.querySelector('.bulba2')
btn.onclick = function(){
    body.classList.toggle('on')
    bulba2.classList.toggle('on')
}