import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './message-component.css'
import { deleteMessage } from '../../actions/message-action.js'
import {withRouter} from "react-router-dom"

const buttonsEditDeleteDiv = (message, history) => {
  return(
    <div className="buttons">
      <button id="edit" type="button" className="btn"
              onClick={() => { history.push(`/edit/${message.id}`) }
      }>Edit
      </button>
      <button id="delete" type="button" className="btn"
              onClick={() => { deleteMessage(message.id) }
      }>Delete
      </button>
    </div>
  )
}
const buttonsSaveCancelDiv = (history) => {
  return(
    <div className="buttons">
      <button id="save" type="button" className="btn">Save</button>
      <button id="cancel" type="button" className="btn"
          onClick={() => { history.push('/') }}>Cancel</button>
    </div>
  )
}

const constructInput = (value, isReadOnly) => {
  if (isReadOnly) {
    return (<input type="text" readOnly value={value}></input>)
  } else {
    return (<input type="text" defaultValue={value}></input>)
  }
}

const Message = ({ message, isReadOnly, history, deleteMessage }) => {
  console.log('isReadOnly', isReadOnly, 'message.id', message.id)
  let buttons
  if (isReadOnly) {
    buttons = buttonsEditDeleteDiv(message, history)
  } else {
    buttons = buttonsSaveCancelDiv(history)
  }
  return (
    <div className="message">
      <div className="message-fiels">

        <div className="left">
          <div className="field">
            Name:
          </div>
          <div className="field">
            Message:
          </div>
        </div>

        <div className="right">
          <div>
            {constructInput(message.name, isReadOnly)}
          </div>
          <div>
            {constructInput(message.message, isReadOnly)}
          </div>
        </div>
      </div>

      { buttons }

    </div>
  )
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
  deleteMessage
}, dispatch)

//null because here we don't need state
//connect takes ShowMessage function and creates from it a React Component
//
export default withRouter(connect(null, mapDispatchToProps)(Message))
