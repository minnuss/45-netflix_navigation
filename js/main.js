const btnOpen = document.querySelector('.open-btn')
const btnClose = document.querySelector('.close-btn')
const navAll = document.querySelectorAll('.nav')

btnOpen.addEventListener('click', () => {

    navAll.forEach(nav => {
        nav.classList.add('visible')
    })
})

btnClose.addEventListener('click', () => {

    navAll.forEach(nav => {
        nav.classList.remove('visible')
    })
})