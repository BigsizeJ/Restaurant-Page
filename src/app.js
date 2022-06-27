import Home from './home.js'
import Menu from './menu.js'
import Contact from './contact.js'

const App = (() => {
    const container = document.querySelector('#container')
    
    const init = () => {
        const content = document.createElement('div')
        const header = document.createElement('header')
        const title = document.createElement('h1')

        title.textContent = 'Burger Fiesta'

        title.className = 'title'
        content.className = 'content'
        header.className = 'header'

        header.appendChild(title)
        header.appendChild(createNav())
        container.appendChild(header)
        container.appendChild(content)
        setActive(document.querySelector('.btn'))
        Home()

    }

    const createNav = () => {
        const nav = document.createElement('nav')
        nav.className = 'navbar'

        const homeButton = document.createElement('button')
        homeButton.classList.add('btn', 'homebtn')
        homeButton.textContent = "Home"
        homeButton.addEventListener('click', (e) => {
            if(e.target.classList.contains('active')) return
            
            setActive(homeButton)
            Home()
        })

        const menuButton = document.createElement('button')
        menuButton.classList.add('btn')
        menuButton.textContent = "Menu"
        menuButton.addEventListener('click', (e) => {
            if(e.target.classList.contains('active')) return

            setActive(menuButton)
            Menu()
        })

        const contactButton = document.createElement('button')
        contactButton.classList.add('btn')
        contactButton.textContent = "Contact"
        contactButton.addEventListener('click', (e) => {
            if(e.target.classList.contains('active')) return

            setActive(contactButton)
            Contact()
        })

        nav.appendChild(homeButton)
        nav.appendChild(menuButton)
        nav.appendChild(contactButton)

        return nav
    }

    const setActive = (button) => {
        const buttons = container.querySelectorAll('.btn')
        buttons.forEach((button) => {
            button.classList.remove('active')
        })

        button.classList.add('active')
    }

    return {init}
})()

export default App