import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Container, Name, Description, Stats, Stat, StatCount } from './styles'

export default function Awards({ data }) {
  return (
    <Container>
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>
    </Container>
  )
}