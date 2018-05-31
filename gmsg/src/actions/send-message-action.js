export const SEND_MESSAGE = 'SEND_MESSAGE'

export const sendMessage = (name, msg) => {
  console.log("I am in sendMessage action", name, msg)
  return async (dispatch) => {
    const composedMsg = {'name': name, 'message': msg}
    console.log('composedMsg', composedMsg)
    const newMsg = await fetch(`/messages`, {
      method: 'POST',
      body: JSON.stringify(composedMsg),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    if(newMsg.status === 200) {
      const messageJSON = await newMsg.json()
      console.log('messageJSON-->', messageJSON)
      dispatch({type: SEND_MESSAGE, message: messageJSON})

    }
  }
}
