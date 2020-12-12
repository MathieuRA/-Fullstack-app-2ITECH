import './App.css'
import { Home } from './component/home'
import { useState } from 'react'
import { User } from './component/users/user'
import Project from './component/projects/project'

function App() {
  const [route, setRoute] = useState('projects')
  return (
    <>
      <div>
        <nav>
          <ul className='nav'>
            <li
              onClick={() => setRoute('home')}
              className='nav-item btn btn-primary'>
              Accueil
            </li>
            <li
              onClick={() => setRoute('users')}
              className='nav-item btn btn-success'>
              Utilisateurs
            </li>
            <li
              onClick={() => setRoute('projects')}
              className='nav-item btn btn-secondary'>
              Projets
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <section>
          {route === 'home' && <Home />}
          {route === 'users' && <User />}
          {route === 'projects' && <Project />}
        </section>
      </div>
    </>
  )
}

export default App
