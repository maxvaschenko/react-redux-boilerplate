import { START_APP } from './constants'

const initialState = {
  isLoaded: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_APP:
      return { ...state, isLoaded: true }
    default:
      return state
  }
}
export default reducer
