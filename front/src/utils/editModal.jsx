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
    }
  }

  render() {
    const {
      contents,
      handleEdit,
      hasEditedUser,
    } = this.props

    let i = 0

    return (
      <div onDoubleClick={this.toogleEditing}>
        {map(contents, (content) => {
          const key = Object.keys(contents)[i]
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
              />
            </>
          )
        })}
        <small>
          Doublie clique pour{' '}
          {this.state.isEditing ? (
            <span>annuler</span>
          ) : (
            <span>modifier</span>
          )}
        </small>
        {this.state.isEditing && (
          <button
            onClick={() =>
              handleEdit(
                this.state,
                hasEditedUser,
                this.toogleEditing
              )
            }>
            Modifier
          </button>
        )}
      </div>
    )
  }
}

const FormField = ({ content, isEditing, onChange }) => {
  return isEditing ? (
    <input placeholder={content} onChange={onChange} />
  ) : (
    <p>{content}</p>
  )
}
