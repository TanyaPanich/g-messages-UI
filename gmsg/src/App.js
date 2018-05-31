import React, { Component } from 'react'
import './App.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Header from './components/Header/header-component'
import ComposeButton from './components/ComposeButton/compose-button-component'
import ComposeForm from './components/ComposeForm/compose-form-component'
import Messages from './components/Messages/messages-component'
import { initialize } from './actions/app-action.js'
import {withRouter, Route} from "react-router-dom"

class App extends Component {

  async componentDidMount() {
    this.props.initialize()
  }

  render() {
    console.log("location:", this.props.location)
      return (
          <div className='App container'>
            <Header />
            <ComposeButton />
            <Route path="/compose" component={ComposeForm} />
            <Messages />
          </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {messagesState: state.messagesState}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  initialize,
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
