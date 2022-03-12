import {
  SET_CONTACT,
  SET_LOADING,
  CONTACT_TO_UPDATE,
  SET_SINGLE_CONTACT
} from "./action.types";


export default (state, action) => {
  switch (action.type) {
    case SET_CONTACT:
      return action.payload == null ? { ...state, contacts: [] } : { ...state, contacts: action.payload }
      break;
    case SET_LOADING:
      return { ...state, isLoading: action.payload }
      break;
    case CONTACT_TO_UPDATE:
      return { ...state, contactToUpdate: action.payload, contactToUpdateKey: action.key }
      break;
    case SET_SINGLE_CONTACT:
      return { ...state, contact: action.payload }
      break;
    default:
      return state;
  }
}