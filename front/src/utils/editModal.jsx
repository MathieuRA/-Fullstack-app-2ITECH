import React from 'react'

import { map, isEqual } from 'lodash'

export default class EditModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      user: {
        id: this.props.id,
      },
    }
  }

  componentDidMount = () => {
    this.setState((prevState) => ({
      user: {
        ...this.props.contents,
        ...prevState.user,
      },
    }))
  }

  componentDidUpdate = (prevState) => {
    if (isEqual(prevState, this.state)) {
      return
    }
  }
  toogleEditing = () => {
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
    }))
  }

  _editField = (e, key) => {
    switch (key) {
      case 'firstname':
        this.setState((prevState) => ({
          user: {
            ...prevState.user,
            firstname: e.target.value,
          },
        }))
        break
      case 'lastname':
        this.setState((prevState) => ({
          user: {
            ...prevState.user,
            firstname: e.target.value,
          },
        }))
        break
      case 'job':
        this.setState((prevState) => ({
          user: {
            ...prevState.user,
            firstname: e.target.value,
          },
        }))
        break
      default:
        break
    }
  }

  render() {
    const {
      contents,
      handleEdit,
      hasEditedUser,
    } = this.props

    let i = 0

    const reformateContent = {
      firstname: contents.firstname,
      lastname: contents.lastname,
      job: contents.job,
    }

    return (
      <div
        className='card-body'
        onDoubleClick={this.toogleEditing}
      >
        {map(reformateContent, (content) => {
          const key = Object.keys(reformateContent)[i]
          if (
            // hide useless change without delete them of the object
            key === '__v' ||
            key === '_id'
          ) {
            i++
            return
          }
          i++

          return (
            <>
              <FormField
                key={i}
                content={content}
                isEditing={this.state.isEditing}
                onChange={(e) => this._editField(e, key)}
                label={key}
              />
            </>
          )
        })}
        <br />
        <small>
          Double clique pour{' '}
          {this.state.isEditing ? (
            <span>annuler</span>
          ) : (
            <span>modifier</span>
          )}
        </small>
        <br />
        {this.state.isEditing && (
          <button
            onClick={() =>
              handleEdit(
                this.state,
                hasEditedUser,
                this.toogleEditing
              )
            }
            className='btn btn-outline-info'
          >
            Modifier
          </button>
        )}
      </div>
    )
  }
}

const FormField = ({
  content,
  isEditing,
  onChange,
  label,
}) => {
  const $class =
    label === 'firstname'
      ? 'title'
      : label === 'lastname'
      ? 'text mb-2'
      : 'subtitle text-muted'
  return isEditing ? (
    <input
      className={`card-${$class}`}
      placeholder={content}
      onChange={onChange}
    />
  ) : (
    <p className={`card-${$class}`}> {content}</p>
  )
}
