import React from 'react'

import { map, isEmpty } from 'lodash'
import { useRef } from 'react'

import EditModal from '../../utils/editModal'
import Notification from '../../utils/notification'

import './user.css'

const AddUser = ({ setError, setSuccess }) => {
  const firstname = useRef()
  const job = useRef()
  const lastname = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          _handleSubmit(firstname, job, lastname)
        ),
      })

      firstname.current.value = ''
      job.current.value = ''
      lastname.current.value = ''
      setSuccess('Utilisateur à bien été ajouter')
    } catch (err) {
      setError("L'ajout de l'utilisateur à échouer ")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nom:
            <input
              id='firstname'
              name='firstname'
              ref={firstname}
              type='text'
            />
          </label>
        </div>
        <div>
          <label>
            Prénom:
            <input
              id='lastname'
              name='lastname'
              ref={lastname}
              type='text'
            />
          </label>
        </div>
        <div>
          <label>
            Métier:
            <input
              id='job'
              name='job'
              ref={job}
              type='text'
            />
          </label>
        </div>
        <input type='submit' value='Envoyer' />
      </form>
    </div>
  )
}

const AllUsers = ({
  hasEditedUser,
  setError,
  setSuccess,
  users,
}) =>
  isEmpty(users) ? (
    <p>Aucun utilisateur</p>
  ) : (
    map(users, (user) => (
      <div key={user._id}>
        <button
          onClick={() =>
            _deleteUser(
              hasEditedUser,
              setError,
              setSuccess,
              user._id
            )
          }
          aria-label='Close'
          className='close'
          type='button'
        >
          <span aria-hidden='true'>&times;</span>
        </button>
        <EditModal
          contents={user}
          handleEdit={_editUser}
          hasEditedUser={hasEditedUser}
          id={user._id}
        />
      </div>
    ))
  )

const _deleteUser = async (
  refresh,
  error,
  success,
  userId
) => {
  const response = await fetch(
    `http://localhost:3000/user/${userId}`,
    {
      method: 'DELETE',
    }
  )
  if (response.status === 200) {
    success('Utilisateur supprimer')
    refresh()
  } else {
    error('Erreur lors de la suppression')
    refresh()
  }
}

const _editUser = async (
  { user },
  callback,
  closeEditModal
) => {
  const response = await fetch(
    `http://localhost:3000/user/${user.id}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    }
  )
  await response.json()
  closeEditModal()
  callback()
}
const _getUsers = async () => {
  const response = await fetch(
    'http://localhost:3000/users'
  )
  const users = await response.json()
  return users
}

const _handleSubmit = (firstname, job, lastname) => {
  return {
    firstname: firstname.current.value,
    job: job.current.value,
    lastname: lastname.current.value,
  }
}

export class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
      route: 'get',
      success: '',
      usersLoaded: false,
    }
  }

  async componentDidMount() {
    this.setState({ users: await _getUsers() }, () => {
      this.setState({ usersLoaded: true })
    })
  }

  componentDidUpdate() {
    this.hasEditedUser()
  }

  hasEditedUser = async () => {
    this.setState({ users: await _getUsers() })
  }

  setError = (error) => this.setState({ error })

  setSuccess = (success) => this.setState({ success })

  _setRoute = (route) => this.setState({ route })

  render() {
    const {
      error,
      success,
      route,
      usersLoaded,
      users,
    } = this.state
    return (
      <>
        {error && (
          <Notification $class={'alert-danger'}>
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
            <span onClick={() => this._setRoute('post')}>
              Ajouter un utilisateur
            </span>
          ) : (
            <span onClick={() => this._setRoute('get')}>
              Tout les utilisateurs
            </span>
          )}
        </button>
        {route === 'get' && (
          <div>
            {!usersLoaded ? (
              <p>Chargement des utilisateurs ...</p>
            ) : (
              <AllUsers
                hasEditedUser={this.hasEditedUser}
                setError={this.setError}
                setSuccess={this.setSuccess}
                users={users}
              />
            )}
          </div>
        )}
        {route === 'post' && (
          <AddUser
            setError={this.setError}
            setSuccess={this.setSuccess}
          />
        )}
      </>
    )
  }
}
