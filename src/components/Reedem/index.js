import React from 'react'
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native'
import Modal from "react-native-modal"
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button, Input } from 'react-native-elements'

import { ModalContent, ModalTitle, ModalCloseButton } from './styles'

const Reedem = props => {
  renderModalButton = () => {
    if ( props.reedemLoading ) {
      return (
        <ActivityIndicator size="small" color="#00ff00" />
      )
    }
    
    if (props.validVoucher) {
      return (
        <View>
          <View style={{ alignItems: 'center', marginBottom: 30 }}>
            <Text>Voucher is valid</Text>
            <Text>Mark Zukemberg</Text>
            <Text>Hamburguer + Mate-cola</Text>          
          </View>
          
          <Button
            title="Confirmar"
            color=""
            onPress={() => confirmVoucher() }
          />
          
        </View>
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
    props.takeReedem()
    await sendVoucherRequest() 
    props.confirmedVoucher()
    alert('Entrega da premiação registrada')
  }

  return (
    <Modal 
      isVisible={props.reedem_model_visible}
      animationIn="slideInLeft"
      animationOut="slideOutRight"
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    height: 30
  }
});

export default Reedem