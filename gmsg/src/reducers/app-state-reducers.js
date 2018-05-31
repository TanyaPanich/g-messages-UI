import { INITIALIZE  } from '../actions/app-action.js'
import { SEND_MESSAGE } from '../actions/send-message-action.js'
import { DELETE_MESSAGE } from '../actions/message-action.js'

export const appState = (state = { messages: [] }, action) => {

  switch (action.type) {
    case INITIALIZE: // Action fields: type, messages
      {
        console.log('INITIALIZE action', action)
        return {
          ...state,
          messages: action.messages
        }
      }
    case SEND_MESSAGE: // Action fields: type, message
      {
        console.log("SEND_MESSAGE action", action)
        return {
          ...state,
          messages: [...state.messages, action.message]
        }
      }
    case DELETE_MESSAGE: // Action fields: type, id
      {
        console.log("DELETE_MESSAGE action", action)
        return {
          ...state,
          messages: state.messages.filter(m => m.id !== action.id)
        }
      }
    default:
      return state
  }
}
