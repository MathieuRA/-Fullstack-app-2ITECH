import React, { useRef, useState } from 'react'

import MultiSelect from 'react-multi-select-component'

import { map, isEmpty } from 'lodash'

import Notification from '../../utils/notification'

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
  const thumbnail = useRef()

  const [techno, setTechno] = useState()

  return (
    <>
      <form
        onSubmit={(e) =>
          _handleSubmit(
            e,
            title.current.value,
            techno,
            dev.current.value,
            date.current.value,
            thumbnail.current.value,
            error,
            success,
            refresh
          )
        }
      >
        <div>
          <label>
            Titre:
            <input
              id='title'
              name='title'
              ref={title}
              type='text'
            />
          </label>
          <label>
            Techno:
            <MultiSelect
              options={options}
              onChange={setTechno}
              value={techno}
            />
          </label>
          <label>
            Le développeur
            <select ref={dev}>
              {map(users, (user) => {
                return (
                  <option key={user._id} value={user._id}>
                    {user.firstname}
                  </option>
                )
              })}
            </select>
          </label>
          <label>
            <input
              type='date'
              name='created_date'
              id='created_date'
              ref={date}
            />
          </label>
          <label>
            Image
            <input
              type='text'
              name='thumbnail'
              id='thumbnail'
              ref={thumbnail}
            />
          </label>
        </div>
        <button type='submit'>Envoyer</button>
      </form>
    </>
  )
}

const AllProject = ({
  projects,
  error,
  success,
  refresh,
}) =>
  !isEmpty(projects) ? (
    map(projects, (project) => (
      <ShowProject
        key={project._id}
        project={project}
        error={error}
        success={success}
        refresh={refresh}
      />
    ))
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
      <div>
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
        <h2>{project.title}</h2>
        {user && (
          <div>
            <p>Développeur</p>
            <p>{user}</p>
          </div>
        )}
        <ul>
          {map(project.techno, (techo) => (
            <li key={techo.value}>{techo.label}</li>
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
  thumbnail,
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
    thumbnail,
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
  thumbnail,
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
        _formateForAPI(
          title,
          techno,
          devId,
          timestamp,
          thumbnail
        )
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
  timestamp,
  thumbnail
) => {
  return {
    title,
    techno,
    developper_id: devId,
    thumbnail,
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
        <button>
          {route === 'get' ? (
            <span onClick={() => this.setRoute('post')}>
              Ajouter un projet
            </span>
          ) : (
            <span onClick={() => this.setRoute('get')}>
              Voir tout les projets
            </span>
          )}
        </button>
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
