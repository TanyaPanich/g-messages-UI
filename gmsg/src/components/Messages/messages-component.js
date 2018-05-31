import React, {Component} from 'react'
import Message from '../Message/message-component'
import {connect} from 'react-redux'
import './messages-component.css'
import {Route, Switch, withRouter} from "react-router-dom"

class Messages extends Component {
  render() {
    let {appState} = this.props

    return (<div className="jumbotron">
      <div>
        {
          appState.messages.map((m, idx) => {
            const editPath = `/edit/${m.id}`
            return (<div key={idx}>
              <Switch>
                <Route path={editPath} render={props => (
                  <Message {...props} message={m} isReadOnly={false}/>
                )}/>
                <Route path="/" render={props => (
                  <Message {...props} message={m} isReadOnly={true}/>
                )}/>
              </Switch>
            </div>)
          })
        }
      </div>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {appState: state.appState}
}

export default withRouter(connect(mapStateToProps)(Messages))
