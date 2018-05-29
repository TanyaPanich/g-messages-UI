import React, { Component } from 'react'
import './App.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Messages from './components/Messages/messages-component'
// import Header from './components/Header'
// import Footer from './components/Footer'
import { initialize } from './actions/app-action.js'

class App extends Component {

  async componentDidMount() {
    console.log('componentDidMount ', this.props)
    this.props.initialize()
  }

  render() {
    console.log('app render ', this.props)
      return (
        <div className='App container'>
          {/* <Header /> */}
          <h1>Q3 assesment - training</h1>
          <Messages />
          {/* <Footer /> */}
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {messagesState: state.messagesState}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  initialize
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
