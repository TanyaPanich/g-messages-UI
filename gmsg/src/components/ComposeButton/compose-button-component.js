import React from 'react'
import './compose-button-component.css'
import {withRouter} from "react-router-dom"

const onClick = (location, history) => {
  console.log("onClick compose")
  if (location.pathname === '/compose') {
    history.push('/')
  } else {
    history.push('/compose')
  }
}

class ComposeButton extends React.Component {
  render() {
    return (<div>
      <button type="button" className="btn btn-lg"
              onClick={() => onClick(this.props.location, this.props.history)}>
        Compose
      </button>
    </div>)
  }
}

export default withRouter(ComposeButton)
