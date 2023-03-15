const mobileNav = document.getElementById('mobile-navigation')
const toggleMenu = document.querySelector('.toggle-menu')

const closeMenu = document.createElement('img')
closeMenu.src = 'images/icon-close.svg'
closeMenu.alt = 'Icon Close'
closeMenu.style.pointerEvents = 'all'
closeMenu.style.cursor = 'pointer'

toggleMenu.addEventListener('click', () => {
    mobileNav.style.display = 'block'
    toggleMenu.replaceWith(closeMenu)
})

closeMenu.addEventListener('click', () => {
    mobileNav.style.display = 'none'
    closeMenu.replaceWith(toggleMenu)
})

function hideMobileMenu() {
    if (window.innerWidth > 768) {
        mobileNav.style.display = 'none'
        closeMenu.replaceWith(toggleMenu)
    }
}

window.addEventListener('resize', hideMobileMenu)