
const btns = [...document.getElementsByClassName('btn')]
const background = document.getElementsByClassName('content')[0]

console.log(background)

btns.forEach( (btn) => {
    btn.addEventListener('click', () => alert('btn was clicked'))
})