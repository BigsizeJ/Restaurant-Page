export default function About() {
    const content = document.querySelector('.content')
    content.innerText = ''
    const h1 = document.createElement('h1')
    h1.textContent = "Hello About"
    content.appendChild(h1)
}
