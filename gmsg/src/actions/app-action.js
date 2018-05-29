export const INITIALIZE = 'INITIALIZE'

export const initialize = () => {
  return async (dispatch) => {
    console.log('1. we are in initialize action')
    let newMessages = []
    const messagesResponse = await fetch(`/messages`)
    if (messagesResponse.status === 200) {
      const messagesJSON = await messagesResponse.json()
      newMessages = messagesJSON.messages
      console.log('newMessages', newMessages)
    }
    dispatch({
      type: INITIALIZE,
      messages: newMessages
    })
  }
}
