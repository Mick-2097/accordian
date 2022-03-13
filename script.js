let q1 = document.querySelector('.question-1')
let q2 = document.querySelector('.question-2')
let q3 = document.querySelector('.question-3')
let q4 = document.querySelector('.question-4')
let q5 = document.querySelector('.question-5')
let a1 = document.querySelector('.answer-1')
let a2 = document.querySelector('.answer-2')
let a3 = document.querySelector('.answer-3')
let a4 = document.querySelector('.answer-4')
let a5 = document.querySelector('.answer-5')
let arrow = document.querySelector('.arrow')

q1.addEventListener('click', event => {
    if (a1.style.display === 'block') {
        q1.style.fontWeight = 'normal'
        a1.style.display = 'none'
        event.target.querySelector('img').classList.remove('flip')
    }else {
        q1.style.fontWeight = 'bold'
        q2.style.fontWeight = 'normal'
        q3.style.fontWeight = 'normal'
        q4.style.fontWeight = 'normal'
        q5.style.fontWeight = 'normal'
        a1.style.display = 'block'
        a2.style.display = 'none'
        a3.style.display = 'none'
        a4.style.display = 'none'
        a5.style.display = 'none'
        event.target.querySelector('img').classList.add('flip')
    }
})
q2.addEventListener('click', event => {
    if (a2.style.display === 'block') {
        q2.style.fontWeight = 'normal'
        a2.style.display = 'none'
        event.target.querySelector('img').classList.remove('flip')
    }else {
        q1.style.fontWeight = 'normal'
        q2.style.fontWeight = 'bold'
        q3.style.fontWeight = 'normal'
        q4.style.fontWeight = 'normal'
        q5.style.fontWeight = 'normal'
        a1.style.display = 'none'
        a2.style.display = 'block'
        a3.style.display = 'none'
        a4.style.display = 'none'
        a5.style.display = 'none'
        event.target.querySelector('img').classList.add('flip')
    }
})
q3.addEventListener('click', event => {
    if (a3.style.display === 'block') {
        q3.style.fontWeight = 'normal'
        a3.style.display = 'none'
        event.target.querySelector('img').classList.remove('flip')
    }else {
        q1.style.fontWeight = 'normal'
        q2.style.fontWeight = 'normal'
        q3.style.fontWeight = 'bold'
        q4.style.fontWeight = 'normal'
        q5.style.fontWeight = 'normal'
        a1.style.display = 'none'
        a2.style.display = 'none'
        a3.style.display = 'block'
        a4.style.display = 'none'
        a5.style.display = 'none'
        event.target.querySelector('img').classList.add('flip')
    }
})
q4.addEventListener('click', event => {
    if (a4.style.display === 'block') {
        q4.style.fontWeight = 'normal'
        a4.style.display = 'none'
        event.target.querySelector('img').classList.remove('flip')
    }else {
        q1.style.fontWeight = 'normal'
        q2.style.fontWeight = 'normal'
        q3.style.fontWeight = 'normal'
        q4.style.fontWeight = 'bold'
        q5.style.fontWeight = 'normal'
        a1.style.display = 'none'
        a2.style.display = 'none'
        a3.style.display = 'none'
        a4.style.display = 'block'
        a5.style.display = 'none'
        event.target.querySelector('img').classList.add('flip')
    }
})
q5.addEventListener('click', event => {
    if (a5.style.display === 'block') {
        q5.style.fontWeight = 'normal'
        a5.style.display = 'none'
        event.target.querySelector('img').classList.remove('flip')
    }else {
        q1.style.fontWeight = 'normal'
        q2.style.fontWeight = 'normal'
        q3.style.fontWeight = 'normal'
        q4.style.fontWeight = 'normal'
        q5.style.fontWeight = 'bold'
        a1.style.display = 'none'
        a2.style.display = 'none'
        a3.style.display = 'none'
        a4.style.display = 'none'
        a5.style.display = 'block'
        event.target.querySelector('img').classList.add('flip')
    }
})