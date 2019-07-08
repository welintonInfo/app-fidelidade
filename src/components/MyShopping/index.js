import React from 'react'
import { View, Button, Text, TouchableOpacity } from 'react-native'
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/FontAwesome'

import { List, Price, ModalContent, ModalTitle, ModalCloseButton } from './styles'

const shooping = [
  {
    id: 1,
    date: '23/06/2019',
    value: 100.15
  },
  {
    id: 2,
    date: '20/06/2019',
    value: 120.15
  },
  {
    id: 3,
    date: '13/06/2019',
    value: 200.15
  },
  {
    id: 4,
    date: '03/06/2019',
    value: 175.15
  }
]

export default class MyShopping extends React.Component {
  state = {
    isModalVisible: false
  }

  constructor(props) {
    super(props)
  }

  renderModal() {    
    return (
      <Modal 
        isVisible={this.state.isModalVisible}
        animationIn="slideInLeft"
        animationOut="slideOutRight"  
      >
        <ModalContent>
          <View style={{position: 'absolute', top: 5, right: 5}}>
            <ModalCloseButton 
              onPress={() => this.toggleModal()}                                        
            >
              <Text>X</Text>
            </ModalCloseButton>
          </View>
          <ModalTitle>Historico de compras</ModalTitle>
          <List
            keyboardShouldPersistTaps="handled"
            data={shooping}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                <Text>{item.date}</Text>
                <Text>R${item.value}</Text>
              </View>
            )}
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
      <>
          <Button 
            title="Minhas compras" 
            onPress={ () => this.toggleModal() } 
            color="#841584"
          />
          { this.renderModal() }
      </>
    )
  }
}