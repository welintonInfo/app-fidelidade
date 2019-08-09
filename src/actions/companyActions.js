import {
  REEDEM_MODEL_VISIBLE,
  REEDEM_MODEL_VERIFY_VOUCHER,
  REEDEM_MODEL_VOUCHER_VALID,
  REEDEM_MODEL_CONFIRMED_VOUCHER,
  REEDEM_MODEL_TAKE_REEDEM
} from './constants'


export const changeReedemModalVisible = (payload) => {
  return {
      type: REEDEM_MODEL_VISIBLE,
      payload
  }
}

export const verifyVoucher = () => {
  return {
      type: REEDEM_MODEL_VERIFY_VOUCHER
  }
}

export const isVoucherValid = () => {
  return {
      type: REEDEM_MODEL_VOUCHER_VALID
  }
}

export const confirmedVoucher = () => {
  return {
      type: REEDEM_MODEL_CONFIRMED_VOUCHER
  }
}

export const takeReedem = () => {
  return {
      type: REEDEM_MODEL_TAKE_REEDEM
  }
}