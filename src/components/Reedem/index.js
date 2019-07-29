import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import Modal from "react-native-modal"
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button, Input } from 'react-native-elements'

import { ModalContent, ModalTitle, ModalCloseButton } from './styles'

const Reedem = (props) => {
  renderModalButton = () => {
    if ( props.reedemLoading ) {
      return (
        <ActivityIndicator size="small" color="#00ff00" />
      )
    }

    if (props.validVoucher) {
      return (
        <>
          <Text>Voucher is valid</Text>
          <Button
            title="Confirmar"
            color=""
            onPress={() => confirmVoucher() }
          />
        </>
      )
    }

    return (
      <Button
        title="Verificar"
        color=""
        onPress={() => verifyVoucherNumber() }
      />
    )
  }  

  verifyVoucherNumber = async () => { 
    props.verifyVoucher()
    await sendVoucherRequest() 
    props.isVoucherValid()
  }

  sendVoucherRequest = () => {
    return new Promise(function(resolve) {
      setTimeout(resolve, 2000);
    })
  }

  confirmVoucher = async () => { 
    props.confirmedVoucher()
    alert('Entrega da premiação registrada')
  }

  return (
    <Modal 
      isVisible={props.reedem_model_visible}
      animationIn="slideInLeft"
      animationOut="slideOutRight"
      animationInTiming={1000}
      hideModalContentWhileAnimating={true}
    >
      <ModalContent>

        <View style={{ position: 'absolute', top: 5, right: 5 }}>
          <ModalCloseButton 
            onPress={() => props.changeReedemModalVisible(false)}                                   
          >
            <Text>X</Text>
          </ModalCloseButton>
        </View>

        <ModalTitle>Insira o voucher</ModalTitle>

        <Input
          inputStyle={{}}
          placeholder="Voucher"            
          leftIcon={
            <Icon
              name='ticket'
              size={24}
              color='#808080'
            />
          }
        />
        { renderModalButton() }
      </ModalContent>
    </Modal>
  )
}

export default Reedem