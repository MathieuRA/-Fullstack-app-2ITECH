import { Home } from './component/home'
import { useState } from 'react'
import { User } from './component/users/user'
import Project from './component/projects/project'

import './App.css'

function App() {
  const [route, setRoute] = useState('home')
  return (
    <>
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a
            className='navbar-brand'
            onClick={() => setRoute('home')}
          >
            Fullstack Typescript / JSX
          </a>
          <div
            className='collapse navbar-collapse'
            id='navbarNav'
          >
            <ul className='navbar-nav'>
              <li className='nav-item active'>
                <a
                  className='nav-link'
                  onClick={() => setRoute('home')}
                >
                  Accueil{' '}
                  <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  onClick={() => setRoute('users')}
                >
                  Utilisateurs
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  onClick={() => setRoute('projects')}
                >
                  Projets
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div>
        <section className='mainSection'>
          {route === 'home' && <Home />}
          {route === 'users' && <User />}
          {route === 'projects' && <Project />}
        </section>
      </div>
    </>
  )
}

export default App
