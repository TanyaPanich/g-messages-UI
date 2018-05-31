export const DELETE_MESSAGE = 'DELETE_MESSAGE'

export const deleteMessage = (id) => {
  console.log("I am in deleteMessage action",id)
  return async (dispatch) => {
    const response = await fetch(`/messages/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    if(response.status === 200) {
      dispatch({type: DELETE_MESSAGE, id: id})
    }
  }
}
