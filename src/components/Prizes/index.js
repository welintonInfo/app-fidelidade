import React from 'react'
import { Modal, View, Button, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Container, Name, Description, Stats, Stat, Price} from './styles'

export default function Prizes({ data, modalVisible = false }) {
  function modalHandler( visible ) {
    modalVisible = visible
    alert(data.name)
  }
  
  return (
    <Container onPress={ () => modalHandler(true) }>
      <Stats>
        <Stat>
          <Name>{data.name}</Name>
        </Stat>
        <Stat>
          <Price>{data.pontuation} pts</Price>
        </Stat>
      </Stats>
      <Description>{data.description}</Description>
    </Container>
  )
}