import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

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
    image: 'https://loremflickr.com/cache/resized/6185_6128268854_562129b2b4_b_800_300_nofilter.jpg'
  },
  {
    id: '2',
    name: 'Company 2',
    description: 'Company 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel felis eget erat ornare feugiat. ',
    stars: 4,
    comments: 40,
    image: 'https://loremflickr.com/cache/resized/65535_33882374838_d29aa2c264_c_800_300_nofilter.jpg'
  },
  {
    id: '3',
    name: 'Company 3',
    description: 'Company 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel felis eget erat ornare feugiat. ',
    stars: 4,
    comments: 40,
    image: 'https://loremflickr.com/cache/resized/65535_48006690943_2db80e35e8_c_800_300_nofilter.jpg'
  },
  {
    id: '4',
    name: 'Company 4',
    description: 'Company 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel felis eget erat ornare feugiat. ',
    stars: 4,
    comments: 40,
    image: 'https://loremflickr.com/cache/resized/65535_33837806128_30057c8e68_c_800_300_nofilter.jpg'
  }
]

export default class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <HeaderNavigationBar { ...this.props } />
        <Title>Empresas parceiras</Title>
    
        <Form>
          <Input 
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Procurar empresas"
          />
          <Submit onPress={() => {}}>
            <Icon name="add" size={22} color="#FFF" />
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
