import React from 'react'
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native'
import Modal from "react-native-modal"
import { Button, Input } from 'react-native-elements'

import { ModalContent, ModalTitle, ModalCloseButton } from './styles'

const UserPrizeModal = props => {
  renderModalButton = () => {
    if ( props.reedemLoading ) {
      return (
        <ActivityIndicator size="small" color="#00ff00" />
      )
    }

    return (
      <Button
        title="Verificar"
        color=""
        onPress={() => sendPrizeToAPI() }
      />
    )
  }  

  sendPrizeToAPI = () => {
    alert('enviando premio para api')
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
          placeholder="Titulo"
        />

        <Input
          inputStyle={{}}
          placeholder="Pontos necessários"
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

export default UserPrizeModal