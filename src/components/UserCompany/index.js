import React from 'react'
import { View, Button, Text, ActivityIndicator, StyleSheet } from 'react-native'
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input } from 'react-native-elements'

import { Container, Name, Description, Stats, Stat, Price, ModalContent, ModalTitle, ModalCloseButton, SetUserPontuationButton } from './styles'

export default class Prizes extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false,
      loading: false,
      pontuation: null,
      userCode: '',
      value: null,
      pontuation: null,
      percentage: 10
    }
  }

  handleValue = (value) => {
    this.setState({ value })
  }

  handleUseCode = (userCode) => {
    this.setState({ userCode })
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }

  renderModal(isVisible = false) {    
    return (
      <Modal 
        isVisible={this.state.isModalVisible}
        animationIn="slideInLeft"
        animationOut="slideOutRight"
      >
        <ModalContent>

          <View style={{ position: 'absolute', top: 5, right: 5 }}>
            <ModalCloseButton 
              onPress={() => this.toggleModal()}                                        
            >
              <Text>X</Text>
            </ModalCloseButton>
          </View>

          <ModalTitle>Registrar Compra/Pontos</ModalTitle>
          
          <Input
            inputStyle={styles.input}
            placeholder="Codigo Usuario"            
            onChangeText = {this.handleUseCode}
            leftIcon={
              <Icon
                name='user'
                size={24}
                color='#808080'
              />
            }
          />

          <Input
            inputStyle={styles.input}
            placeholder="Valor da compra"
            onChangeText = {this.handleValue}
            keyboardType={'numeric'}
            leftIcon={
              <Icon
                name='money'
                size={24}
                color='#808080'
              />
            }
          />

          <View>
            { this.renderModalButton() }
          </View>

        </ModalContent>
      </Modal>
    )
  }

  renderModalButton = () => {
    if(this.state.pontuation) {
      return (
        <View>
          <Text style={{ textAlign: 'center', fontSize: 20 }}>Pontos Registrados para Ingrid Dias</Text>
          <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>{this.state.pontuation} pts</Text>
        </View>
      )
    }

    if ( this.state.loading ) {
      return (
        <ActivityIndicator size="small" color="#00ff00" />
      )
    }

    return (
      <Button
        title="Registrar"
        color=""
        onPress={() => this.setUserPontuation() }
      />
    )
  }  

  setUserPontuation = async () => {    
    this.setState({ loading: true })
    let pontuation = (this.state.percentage * this.state.value) / 100
    let promise = await this.sendUserPontuationRequest() 
    this.setState({ loading: false, pontuation }) 
  }
  
  sendUserPontuationRequest = () => {
    return new Promise(function(resolve) {
      setTimeout(resolve, 2000);
    })
  }


  render() {
    const { navigate } = this.props.navigation
    return (
      <Container onPress={() => navigate('UserCompany', { data: this.props.data }) }>
        <Stats>
          <Stat>
            <Name>{this.props.data.name}</Name>
          </Stat>
          <Stat>
            <SetUserPontuationButton 
              onPress={() => this.toggleModal()}                                        
            >
              <Icon name="user-plus" size={25} color="#ffff" />
            </SetUserPontuationButton>
          </Stat>
        </Stats>
        { this.renderModal() }
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
     paddingTop: 23
  },
  input: {
  }
})
