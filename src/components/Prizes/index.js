import React from 'react'
import { View, Button, Text } from 'react-native'
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/FontAwesome'

import { Container, Name, Description, Stats, Stat, Price, ModalContent, ModalTitle, ModalCloseButton } from './styles'

export default class Prizes extends React.Component {
  state = {
    isModalVisible: false
  }

  constructor(props) {
    super(props)
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

          <Button
            title="Resgatar"
            color=""
            onPress={() => alert('Do something here')}
          />

        </ModalContent>
      </Modal>
    )
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible })
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