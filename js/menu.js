const menuButton = document.getElementById('menuButton')
let menuDropdown = document.getElementById('menuDropdown')

const body = document.body
const mask = document.getElementById('menuDropdown__mask')
const changeImageButton = document.getElementById('jsHandleOpenClose') 

const timeoutImageButton = (image,timeout,element) => {
    setTimeout(() => {
        element.src = image
    }, timeout)
}

const toTop = () => {
    menuDropdown.classList.remove('toDown')
    menuDropdown.classList.add('toTop')

    timeoutImageButton('./images/icon-hamburger.svg',600,changeImageButton)

    body.style.position = 'initial'
    mask.style.opacity = '0'
}

const toDown = () => {
    menuDropdown.classList.remove('toTop')
    menuDropdown.classList.add('toDown')
    changeImageButton.opacity = '0'

    timeoutImageButton('./images/icon-close.svg',700,changeImageButton)
    
    body.style.position = 'fixed'
    mask.style.opacity = '1'
}

const checkClass = () => {
   menuDropdown.className.includes('toTop') ? toDown() : toTop()
}

menuButton.addEventListener('click', (event) => {checkClass()}, false)