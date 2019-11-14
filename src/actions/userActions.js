import {
  SET_USER_DATA_AFTER_LOGIN
} from './constants'

export const setUserData = ( payload ) => {
  return {
      type: SET_USER_DATA_AFTER_LOGIN,
      payload
  }
}