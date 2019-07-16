import React from 'react'
import { View, Button, Text, ActivityIndicator, StyleSheet } from 'react-native'
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input } from 'react-native-elements'

import { Container, Name, Description, Stats, Stat, Price, ModalContent, ModalTitle, ModalCloseButton, SetUserPontuationButton } from './styles'

export default class UserCompanyRedeem extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {    
    return (
      <Container>
        <Text>Resgates</Text>
      </Container>
    )
  }
}
