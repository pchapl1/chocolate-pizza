let milkLi = document.getElementById('milk')
let mascarponeLi = document.getElementById('mascarpone')
let pinkSaltLi = document.getElementById('pinkSalt')
let figsLi = document.getElementById('figs')
let brownSugarLi = document.getElementById('brownSugar')
let waterLi = document.getElementById('water')
let creamLi = document.getElementById('cream')
let sugarLi = document.getElementById('sugar')
let eggsLi = document.getElementById('eggs')
let lemonLi = document.getElementById('lemon')
let butterLi = document.getElementById('butter')
let pecansLi = document.getElementById('pecans')

milkLi.addEventListener('click', handleClick)
mascarponeLi.addEventListener('click', handleClick)
pinkSaltLi.addEventListener('click', handleClick)
figsLi.addEventListener('click', handleClick)
brownSugarLi.addEventListener('click', handleClick)
waterLi.addEventListener('click', handleClick)
creamLi.addEventListener('click', handleClick)
sugarLi.addEventListener('click', handleClick)
eggsLi.addEventListener('click', handleClick)
lemonLi.addEventListener('click', handleClick)
butterLi.addEventListener('click', handleClick)
pecansLi.addEventListener('click', handleClick)



function handleClick(event){
    let parentLi = event.target.parentNode
    let li = this
    if (this.checked) {
        console.log('checked')
        parentLi.classList.add('strike-through')
    }
    else {
        parentLi.classList.remove('strike-through')
    }
}