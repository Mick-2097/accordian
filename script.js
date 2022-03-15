let questions = document.querySelectorAll('.question')
let answers = document.querySelectorAll('.answer')
let arrows = document.querySelectorAll('.arrow')
let questionArea = document.querySelector('.questions')

questionArea.addEventListener('click', event => {
    if (!event.target.classList.contains('question')) return
    if (event.target.style.fontWeight === 'bold') {
        event.target.style.fontWeight = 'normal'
        event.target.nextElementSibling.style.display = 'none'
        event.target.querySelector('img').classList.remove('flip')
    }else {
        questions.forEach(x => x.style.fontWeight = 'normal')
        answers.forEach(x => x.style.display = 'none')
        arrows.forEach(x => x.classList.remove('flip'))
        event.target.style.color = 'var(--text)'
        event.target.style.fontWeight = 'bold'
        event.target.nextElementSibling.style.display = 'block'
        event.target.querySelector('img').classList.add('flip')
    }
})
questionArea.addEventListener('mouseover', event => {
    if (event.target.classList.contains('question') 
        && event.target.style.fontWeight === 'normal') {
        event.target.style.color = 'var(--text-hover)'
    }
})
questionArea.addEventListener('mouseout', event => {
    if (event.target.classList.contains('question') 
        && event.target.style.fontWeight === 'normal') {
        event.target.style.color = 'var(--text)'
    }
})