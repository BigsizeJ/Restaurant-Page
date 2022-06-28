import chefImgSrc from './img/chef.png'

export default function Home() {
    const content = document.querySelector('.content')
    const homeDiv = document.createElement('div')
    const chefImg = document.createElement('img')
    const homeDivLeft = document.createElement('div')
    const homeDivRight = document.createElement('div')

    chefImg.className = 'chefImg'
    chefImg.src = chefImgSrc

    homeDiv.className = 'homeDiv'
    homeDivRight.className = 'homeDivRight'
    content.textContent = ''

    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    
    h1.innerHTML = "<span class='titlecontent'>Burger fiesta</span> serving since 1958"

    homeDivLeft.appendChild(chefImg)
    homeDivRight.appendChild(h1)
    homeDivRight.appendChild(createText('Made with Perfection in mind'))
    
    homeDiv.appendChild(homeDivLeft)
    homeDiv.appendChild(homeDivRight)
    content.appendChild(homeDiv)
}

function createText(message) {
    const p = document.createElement('p')
    p.textContent = message
    return p
}