

function hamburger(){
    let menuBtn = document.querySelector('.hamburger')
    let content = document.querySelector('body')
    let navLinks = document.querySelector('.nav-mobile')
    menuBtn.addEventListener('click', open)
    function open() {
        let btnSwitch = menuBtn.querySelector('img').src = 'images/icon-close.svg'
        navLinks.style.visibility = 'visible'
        menuBtn.removeEventListener('click',open)
        menuBtn.addEventListener('click',close)
        
    }
    function close(){
        menuBtn.querySelector('img').src = 'images/icon-hamburger.svg'
        menuBtn.addEventListener('click', open)
        navLinks.style.visibility = 'hidden'
    }
}

hamburger()