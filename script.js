let questions = document.querySelectorAll('.question')
let answers = document.querySelectorAll('.answer')
let arrows = document.querySelectorAll('.arrow')
let questionArea = document.querySelector('.questions')
let images = document.querySelector('.images')
let box = document.querySelector('.box')

questionArea.addEventListener('click', event => {
    if (!event.target.classList.contains('question')) return
    if (event.target.style.fontWeight === 'bold') {
        event.target.style.fontWeight = 'normal'
        event.target.style.borderBottom = '1px solid hsl(240, 5%, 91%)'
        event.target.nextElementSibling.style.display = 'none'
        event.target.querySelector('img').classList.remove('flip')
    }else {
        questions.forEach(x => x.style.fontWeight = 'normal')
        answers.forEach(x => x.style.display = 'none')
        arrows.forEach(x => x.classList.remove('flip'))
        event.target.style.color = 'var(--text)'
        event.target.style.fontWeight = 'bold'
        event.target.style.borderBottom = 'none'
        event.target.nextElementSibling.style.display = 'block'
        event.target.querySelector('img').classList.add('flip')
    }
})
images.addEventListener('mouseenter', event => {
    box.classList.add('shift')
})
images.addEventListener('mouseleave', event => {
    box.classList.remove('shift')
})
questionArea.addEventListener('mouseenter', event => {
    if (event.target.classList.contains('question') 
        && event.target.style.fontWeight !== 'bold') {
        console.log('listener still works')
        event.target.style.color = 'var(--text-hover)'
    }
})
questionArea.addEventListener('mousleave', event => {
    if (event.target.classList.contains('question') 
        && event.target.style.fontWeight !== 'bold') {
        event.target.style.color = 'var(--text)'
    }
})
