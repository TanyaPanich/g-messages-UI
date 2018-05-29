import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export default ({message}) => {
  console.log("Message:", message)
  return (
    <div>
      <div className="col-xs-11">
        <a>
          { message.name }
        </a>
      </div>
    </div>
  )
}
