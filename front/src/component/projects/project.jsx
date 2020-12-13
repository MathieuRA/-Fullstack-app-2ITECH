import React, { useRef, useState } from 'react'

import MultiSelect from 'react-multi-select-component'

import { map, isEmpty } from 'lodash'

import Notification from '../../utils/notification'

import './projects.css'
import { getRandomColor } from '../../utils/tools'

const AddProject = ({ users, error, success, refresh }) => {
  const options = [
    { value: 'css', label: 'CSS' },
    { value: 'html', label: 'HTML' },
    { value: 'javascript', label: 'Javascript' },
    { value: 'node', label: 'Node.js' },
    { value: 'php', label: 'PHP' },
    { value: 'react', label: 'React.js' },
    { value: 'symphony', label: 'Symphony' },
    { value: 'typscript', label: 'Typescript' },
    { value: 'wordpress', label: 'Wordpress' },
  ]

  const title = useRef()
  const date = useRef()
  const dev = useRef()

  const [techno, setTechno] = useState()

  return (
    <div className='formProject pt-4'>
      <form
        onSubmit={(e) =>
          _handleSubmit(
            e,
            title.current.value,
            techno,
            dev.current.value,
            date.current.value,
            error,
            success,
            refresh
          )
        }
      >
        <div>
          <div className='form-row'>
            <div className='col'>
              <label>
                Titre:
                <input
                  id='title'
                  name='title'
                  ref={title}
                  type='text'
                  className='form-control'
                />
              </label>
            </div>
            <div className='col'>
              <label>
                Technologie:
                <MultiSelect
                  options={options}
                  onChange={setTechno}
                  value={techno}
                />
              </label>
            </div>
            <div className='col'>
              <label>
                Le développeur
                <div>
                  <select ref={dev}>
                    {map(users, (user) => {
                      return (
                        <option
                          key={user._id}
                          value={user._id}
                        >
                          {user.firstname}
                        </option>
                      )
                    })}
                  </select>
                </div>
              </label>
            </div>
          </div>

          <div className='form-row'>
            <div className='col'>
              <label>
                <input
                  type='date'
                  name='created_date'
                  id='created_date'
                  ref={date}
                />
              </label>
            </div>
          </div>
        </div>
        <button
          type='submit'
          className='btn btn-outline-primary'
        >
          Envoyer
        </button>
      </form>
    </div>
  )
}

const AllProject = ({
  projects,
  error,
  success,
  refresh,
}) =>
  !isEmpty(projects) ? (
    <div className='projectsContainer mt-3'>
      {map(projects, (project) => (
        <ShowProject
          key={project._id}
          project={project}
          error={error}
          success={success}
          refresh={refresh}
        />
      ))}
    </div>
  ) : (
    <p>Aucun projet</p>
  )

const ShowProject = ({
  project,
  error,
  success,
  refresh,
}) => {
  const [user, setUser] = useState()
  _getUser(project.developper_id, setUser)
  return (
    <>
      <div className='card project mb-3'>
        <button
          onClick={() =>
            _deleteProject(
              project._id,
              success,
              error,
              refresh
            )
          }
          aria-label='Close'
          className='close'
          type='button'
        >
          <span aria-hidden='true'>&times;</span>
        </button>
        <div
          className='card-img-top'
          style={{ backgroundColor: getRandomColor() }}
        ></div>
        <div className='card-body'>
          <h5 className='card-title'>{project.title}</h5>
          {user && (
            <div>
              <p className='card-text'>
                Développeur: {user}
              </p>
            </div>
          )}
        </div>
        <ul className='list-group list-grou-flush'>
          {map(project.techno, (techo) => (
            <li
              className='list-group-item'
              key={techo.value}
              style={{ color: getRandomColor() }}
            >
              {techo.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

const _deleteProject = async (
  projectId,
  success,
  error,
  refresh
) => {
  const response = await fetch(
    `http://localhost:3000/project/${projectId}`,
    {
      method: 'DELETE',
    }
  )
  if (response.status === 200) {
    success('Suppression effectuer')
    refresh()
  } else {
    error('Erreur lors de la suppresion')
    refresh()
  }
}

const _handleSubmit = (
  e,
  title,
  techno,
  dev,
  date,
  error,
  success,
  refresh
) => {
  e.preventDefault()
  _createProject(
    title,
    techno,
    dev,
    new Date(date).getTime(),
    error,
    success,
    refresh
  )
}

const _createProject = async (
  title,
  techno,
  devId,
  timestamp,
  error,
  success,
  refresh
) => {
  const response = await fetch(
    'http://localhost:3000/project',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        _formateForAPI(title, techno, devId, timestamp)
      ),
    }
  )
  if (response.status === 201) {
    success('Projet ajouter avec success')
    refresh()
  } else {
    error("Erreur lors de l'ajoute du projet")
    refresh()
  }
}

const _formateForAPI = (
  title,
  techno,
  devId,
  timestamp
) => {
  return {
    title,
    techno,
    developper_id: devId,
    created_date: timestamp,
  }
}

const _getUsers = async () => {
  const response = await fetch(
    'http://localhost:3000/users'
  )
  const users = await response.json()
  return users
}

const _getUser = async (userId, callback) => {
  const response = await fetch(
    `http://localhost:3000/user/${userId}`
  )
  const user = await response.json()
  callback(user.firstname)
  return user.firstname
}

const _getProjects = async () => {
  const response = await fetch(
    'http://localhost:3000/projects'
  )

  const projects = await response.json()
  return projects
}

export default class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
      loaded: false,
      route: 'get',
      success: '',
    }
  }

  async componentDidMount() {
    this.setState(
      {
        users: await _getUsers(),
        projects: await _getProjects(),
      },
      () => this.setState({ loaded: true })
    )
  }

  asEditedPOroject = async () =>
    this.setState({ projects: await _getProjects() })

  setRoute = (route) => this.setState({ route })

  setError = (error) => this.setState({ error })

  setSuccess = (success) => this.setState({ success })

  render() {
    const {
      route,
      users,
      error,
      success,
      loaded,
      projects,
    } = this.state

    return (
      <>
        {error && (
          <Notification $class={'alert-error'}>
            {error}
          </Notification>
        )}
        {success && (
          <Notification $class={'alert-success'}>
            {success}
          </Notification>
        )}
        {route === 'get' ? (
          <button
            className='btn alert-info userButton'
            onClick={() => this.setRoute('post')}
          >
            Ajouter un projet
          </button>
        ) : (
          <button
            className='btn alert-info userButton'
            onClick={() => this.setRoute('get')}
          >
            Voir tout les projets
          </button>
        )}

        {route === 'get' &&
          (loaded ? (
            <AllProject
              projects={projects}
              error={this.setError}
              success={this.setSuccess}
              refresh={this.asEditedPOroject}
            />
          ) : (
            <p>Chargement ...</p>
          ))}

        {route === 'post' && (
          <AddProject
            users={users}
            error={this.setError}
            success={this.setSuccess}
            refresh={this.asEditedPOroject}
          />
        )}
      </>
    )
  }
}
