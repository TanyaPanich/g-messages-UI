import React from 'react'
import ShowMessage from '../ShowMessage/show-message-component'
import { connect } from 'react-redux'

const Messages = ({ appState }) => {

  return (<div className="Messages">
    {appState.messages.map((m, idx) =>
      <ShowMessage message={ m }
               key={ idx }
      />)
    }
  </div>)
}

const mapStateToProps = (state) => {
  return {appState: state.appState}
}

export default connect(mapStateToProps)(Messages)
