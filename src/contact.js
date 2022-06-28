import tel from './img/phone.svg'
import marker from './img/map-marker.svg'
import map from './img/map.png'


export default function Contact() {
    const content = document.querySelector('.content')
    const contactDiv = document.createElement('div')
    const mapImg = document.createElement('img')
    contactDiv.className = 'contactDiv'
    content.textContent = ''
    mapImg.src = map
    mapImg.className = 'mapImg'
    
    contactDiv.appendChild(createInfo(tel, '012 3456 789'))
    contactDiv.appendChild(createInfo(marker, 'Los Angeles, California'))
    contactDiv.appendChild(mapImg)
    content.append(contactDiv)
}

function createInfo(img, text) {
    const p = document.createElement('p')
    const image = document.createElement('img')
    const div = document.createElement('div')
    image.src = img
    p.innerHTML = text
    
    div.appendChild(image)
    div.appendChild(p)
    return div
}