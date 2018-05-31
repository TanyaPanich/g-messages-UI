export const INITIALIZE = 'INITIALIZE'

export const initialize = () => {
  return async (dispatch) => {
    let newMessages = []
    const messagesResponse = await fetch(`/messages`)
    if (messagesResponse.status === 200) {
      const messagesJSON = await messagesResponse.json()
      newMessages = messagesJSON.messages
    }
    dispatch({
      type: INITIALIZE,
      messages: newMessages
    })
  }
}
