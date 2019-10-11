import {
  REEDEM_MODEL_VISIBLE,
  REEDEM_MODEL_VERIFY_VOUCHER,
  REEDEM_MODEL_VOUCHER_VALID,
  REEDEM_MODEL_CONFIRMED_VOUCHER,
  REEDEM_MODEL_TAKE_REEDEM,
  PRIZE_NEW_RECORD
} from '~/actions/constants' 

const INITIAL_STATE = {
  reedem_model_visible: false,
  reedemLoading: false,
  validVoucher: false,
  prizes: [
    {
      id: 1,
      name: 'Premio 1',
      description: 'Descricao do premio 1',
      pontuation: 250
    },
    {
      id: 2,
      name: 'Premio 2',
      description: 'Descricao do premio 2',
      pontuation: 200
    },
    {
      id: 3,
      name: 'Premio 3',
      description: 'Descricao do premio 3',
      pontuation: 150
    }
  ]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REEDEM_MODEL_VISIBLE : return { ...state, reedemLoading: false, validVoucher: false, reedem_model_visible: false, reedem_model_visible: action.payload }
    case REEDEM_MODEL_VERIFY_VOUCHER : return { ...state, reedemLoading: true }
    case REEDEM_MODEL_VOUCHER_VALID : return { ...state, reedemLoading: false, validVoucher: true }
    case REEDEM_MODEL_TAKE_REEDEM : return { ...state, reedemLoading: true }
    case REEDEM_MODEL_CONFIRMED_VOUCHER : return { ...state, reedemLoading: false, validVoucher: false, reedem_model_visible: false }
    case PRIZE_NEW_RECORD: return { ...state, prizes: action.payload }
    default:
      return state
  }
};