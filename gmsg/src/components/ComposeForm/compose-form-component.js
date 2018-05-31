import './compose-form-component.css'
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {sendMessage} from '../../actions/send-message-action.js'
import {withRouter} from 'react-router-dom'

const handleSubmit = (func, e, history) => {
  console.log("history in ComposeForm", history)
  e.preventDefault()
  const name = document.querySelector('#name').value || ''
  const msg = document.querySelector('#msg').value || ''
  func(name, msg)
  history.push('/')
}

class ComposeForm extends React.Component {
  render() {
    return (
      <form className="form-horizontal well"
             onSubmit={(event) => {
                        handleSubmit(this.props.sendMessage, event, this.props.history)
                      }}
        >
      <div className="form-group">
        <div className="col-sm-8 col-sm-offset-2">
          <h4>Compose Message</h4>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="name" className="col-sm-2 control-label">Name</label>
        <div className="col-sm-8">
          <input type="text" className="form-control" id="name" placeholder="Enter a subject" name="name"/>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="msg" className="col-sm-2 control-label">Message</label>
        <div className="col-sm-8">
          <textarea name="msg" id="msg" className="form-control"></textarea>
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-8 col-sm-offset-2">
          <input type="submit" value="Send" className="btn btn-primary"/>
        </div>
      </div>
    </form>
          )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  sendMessage
}, dispatch)

//null because here we don't need state
export default withRouter(connect(null, mapDispatchToProps)(ComposeForm))
