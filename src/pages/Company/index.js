import React from 'react';

import { Container, Name, List, Description } from './styles'
import Awards from '~/components/Awards'

const awards = [
  {
    id: 1,
    name: 'Premio 1',
    description: 'Descricao do premio 1'
  },
  {
    id: 2,
    name: 'Premio 2',
    description: 'Descricao do premio 2'
  },
  {
    id: 3,
    name: 'Premio 3',
    description: 'Descricao do premio 3'
  },
]

export default class Company extends React.Component {

  constructor(props) {
    super(props)
  }
  
  componentDidMound() {
    console.log(this.props)
  }

  render() {
    const { data } = this.props.navigation.state.params

    return (
      <Container>
        <Name>{data.name}</Name>
        <Description>{data.description}</Description>      
  
        <List
          keyboardShouldPersistTaps="handled"
          data={awards}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Awards data={item} />          
          )}
        />
      </Container>
    )
  }
}

