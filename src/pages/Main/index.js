import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { BackHandler } from 'react-native'

import { Container, Title, Form, Input, Submit, List } from './styles'
import Companies from '~/components/Companies'
import HeaderNavigationBar from '~/components/HeaderNavigationBar'


const data = [
  {
    id: '1',
    name: 'Company 1',
    description: 'Company 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel felis eget erat ornare feugiat. ',
    stars: 4,
    comments: 40,
    image: 'https://picsum.photos/id/389/800/300'
  },
  {
    id: '2',
    name: 'Company 2',
    description: 'Company 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel felis eget erat ornare feugiat. ',
    stars: 3,
    comments: 40,
    image: 'https://picsum.photos/id/117/800/300'
  },
  {
    id: '3',
    name: 'Company 3',
    description: 'Company 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel felis eget erat ornare feugiat. ',
    stars: 2,
    comments: 40,
    image: 'https://picsum.photos/id/240/800/300'
  },
  {
    id: '4',
    name: 'Company 4',
    description: 'Company 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel felis eget erat ornare feugiat. ',
    stars: 1,
    comments: 40,
    image: 'https://picsum.photos/id/950/800/300'
  }
]

export default class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation
    const { state } = this.props.navigation
    console.log(state)
    return (
      <Container>
        <HeaderNavigationBar { ...this.props } title="Principal" />
        <Title>Empresas parceiras</Title>
    
        <Form>
          <Input 
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Procurar empresas"
          />
          <Submit onPress={() => {}}>
            <Icon name="search" size={22} color="#FFF" />
          </Submit>
        </Form>
    
        <List
          keyboardShouldPersistTaps="handled"
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Companies data={item} navigate={navigate} />          
          )}
        />
      </Container>
    )
  } 
}
