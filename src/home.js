export default function Home() {
    const content = document.querySelector('.content')
    const homeDiv = document.createElement('div')
    homeDiv.className = 'homeDiv'
    content.textContent = ''

    const h1 = document.createElement('h1')
    h1.textContent = "Hello Home"
    homeDiv.appendChild(h1)
    content.appendChild(homeDiv)
}

