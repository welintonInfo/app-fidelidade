import React from 'react'
import { View, Button, Text, ActivityIndicator } from 'react-native'
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/FontAwesome'

import { Container, Name, Description, Stats, Stat, Price, ModalContent, ModalTitle, ModalCloseButton } from './styles'

export default class Prizes extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false,
      loading: false,
      voucher: null
    }
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

          <ModalTitle>Resgatar prêmio</ModalTitle>

          <Name>{ this.props.data.name }</Name>
          <Price>{ this.props.data.pontuation } pts</Price>

          { this.renderModalButton() }

        </ModalContent>
      </Modal>
    )
  }

  renderModalButton = () => {
    if(this.state.voucher) {
      return (
        <View>
          <Text style={{ textAlign: 'center', fontSize: 20 }}>Resgate solicitado {'\n'} Apresente o voucher e pegue o prêmio</Text>
          <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>Voucher: {this.state.voucher}</Text>
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
        title="Comfirmar"
        color=""
        onPress={() => this.generatePrizeVoucher() }
      />
    )
  }  

  generatePrizeVoucher = async () => {    
    if( Number(this.props.pontuation) < Number(this.props.data.pontuation) ) {
      alert('Pontuation is not valid')        
    } else {
      let voucher = Math.random().toString(36).substring(7) 
      this.setState({ loading: true }) 
      let promise = await this.sendPrizeRequest() 
      this.setState({ loading: false, voucher }) 
    }    
  }
  
  sendPrizeRequest = () => {
    return new Promise(function(resolve) {
      setTimeout(resolve, 2000);
    })
  }


  render() {
    return (
      <Container onPress={() => this.toggleModal() }>
        <Stats>
          <Stat>
            <Name>{ this.props.data.name }</Name>
          </Stat>
          <Stat>
            <Price>{ this.props.data.pontuation } pts</Price>
          </Stat>
        </Stats>
        <Description>{ this.props.data.description }</Description> 
        { this.renderModal() }
      </Container>
    )
  }
}