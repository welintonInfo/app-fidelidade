import {
  REEDEM_MODEL_VISIBLE,
  REEDEM_MODEL_VERIFY_VOUCHER,
  REEDEM_MODEL_VOUCHER_VALID,
  REEDEM_MODEL_CONFIRMED_VOUCHER
} from '~/actions/constants' 

const INITIAL_STATE = {
  reedem_model_visible: false,
  reedemLoading: false,
  validVoucher: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REEDEM_MODEL_VISIBLE : return { ...state, reedem_model_visible: action.payload }
    case REEDEM_MODEL_VERIFY_VOUCHER : return { ...state, reedemLoading: true }
    case REEDEM_MODEL_VOUCHER_VALID : return { ...state, reedemLoading: false, validVoucher: true }
    case REEDEM_MODEL_CONFIRMED_VOUCHER : return { ...state, reedemLoading: false, validVoucher: false, reedem_model_visible: false }
    default:
      return state
  }
};