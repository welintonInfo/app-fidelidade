import React from 'react'
import { Text } from 'react-native'
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input } from 'react-native-elements'

import { Container, List} from './styles'
import Prizes from '~/components/Prizes'

const prizesData = [
  {
    id: 1,
    name: 'Premio 1',
    description: 'Descricao do premio 1',
    pontuation: 250
  },
  {
    id: 2,
    name: 'Premio 2',
    description: 'Descricao do premio 2',
    pontuation: 200
  },
  {
    id: 3,
    name: 'Premio 3',
    description: 'Descricao do premio 3',
    pontuation: 150
  },
]

export default class UserCompanyInfo extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {    
    return (
      <Container>
        <Input
          placeholder="Nome Empresa" 
        />
        <Input
          placeholder="Endereço" 
        />
        <Input
          placeholder="Categoria" 
        />
        <Input
          placeholder="Horario de funcionamento" 
        />

        <Text>Pontuação</Text>
        <Input
          placeholder="Porcentagem"
          keyboardType={'numeric'} 
        />

        <Text>Premios</Text>
        <List
            keyboardShouldPersistTaps="handled"
            data={prizesData}
            keyExtractor={item => String(item.id)}
            onPress={ () => console.log('clicou')}
            renderItem={({ item }) => (
              <Prizes data={item} pontuation={200} editing={true} />          
            )}
        />
      </Container>
    )
  }
}
