import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Container, Name, Description, Stats, Stat, StatCount } from './styles'

export default function Companies({ data, navigate }) {  
  function renderStars() {
    data.rating = []
    for (var i = 1; i <= 5; i++) {
      let iconName = 'star'

      if ( i > data.stars ) {
        iconName = 'star-o'
      }
      data.rating.push(<Icon name={iconName} size={16} color="#333" />)
    }
  }

  return (  
    <Container onPress={() => navigate('Company', {data}) }>
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>

      <Stats>
        <Stat>
          { renderStars() }
          { data.rating }
        </Stat>
        <Stat>
          <Icon name="comments" size={16} color="#333" />
          <StatCount>{data.comments}</StatCount>
        </Stat>
      </Stats>
    </Container>
  )
}