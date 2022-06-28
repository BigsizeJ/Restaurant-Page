import hamNcheese from './img/hamNcheese.png'
import doublePatty from './img/DoublePatty.png'
import classic from './img/classic.png'
import combo from './img/combo.png'
import triple from './img/TriplePatty.png'
import chicken from './img/chicken.png'

export default function Menu() {
    const content = document.querySelector('.content')
    const menuDiv = document.createElement('div')
    
    menuDiv.className = 'menuDiv'
    
    content.innerText = ''

    menuDiv.appendChild(createItemBox(hamNcheese, 'Ham and Cheese'))
    menuDiv.appendChild(createItemBox(doublePatty, 'Classic Bacon'))
    menuDiv.appendChild(createItemBox(classic, 'Classic Burger'))
    menuDiv.appendChild(createItemBox(combo, 'Ultimate combo'))
    menuDiv.appendChild(createItemBox(triple, 'Triple Patty'))
    menuDiv.appendChild(createItemBox(chicken, 'Chicken Burger'))
    content.appendChild(menuDiv)
}

function createItemBox(img, description) {
    const div = document.createElement('div')
    const itemImage = document.createElement('img')
    const descrip = document.createElement('p')
    descrip.textContent = description
    itemImage.src = img
    div.className = 'grid-item'
    div.appendChild(itemImage)
    div.appendChild(descrip)
    return div
}

