import { INITIALIZE } from '../actions/app-action.js'
// import { SEND_MESSAGE } from '../actions/sendMessage.js'
// import { DELETE_SELECTED } from '../actions/toolbar.js'
// import { messageState } from './messageState'

export const appState = (state = { messages: [] }, action) => {

  console.log('Reducer appState: action', action)
  console.log('Reducer appState: state', state)

  switch (action.type) {
    case INITIALIZE: // Action fields: type, messages
      {
        console.log('INITIALIZE messages', action.messages)
        return {
          ...state,
          messages: action.messages
        }
      }
    default:
      return state
  }
}
