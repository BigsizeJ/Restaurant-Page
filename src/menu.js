export default function Menu() {
    const content = document.querySelector('.content')
    const menuDiv = document.createElement('div')
    const food = document.createElement('div')
    menuDiv.className = 'menuDiv'
    
    content.innerText = ''
    const h1 = document.createElement('h1')
    h1.textContent = "Hello About"
    content.appendChild(h1)
}

