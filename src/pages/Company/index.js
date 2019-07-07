import React from 'react';
import { Image, Dimensions, Text, Button, Modal } from 'react-native'

import { 
  Container, 
  Name, 
  List, 
  Description, 
  LogoContent, 
  LogoContentTitle, 
  CompanyContent,
  Pontuation, 
  Stats,
  Stat
} from './styles'
import Prizes from '~/components/Prizes'
import MyShopping from '~/components/MyShopping'

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

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

export default class Company extends React.Component {

  state = {
    isModalVisible: false
  }

  constructor(props) {
    super(props)
  }
  
  render() {
    const { data } = this.props.navigation.state.params

    return (
      <Container>
        <LogoContent>
          <Image
            style={{ 
              width: imageWidth, height: 200, alignItems: 'center',
              justifyContent: 'center'
            }}
            source={{
              uri: data.image,
            }}
          />
          <LogoContentTitle>
            <Name>{data.name}</Name>
          </LogoContentTitle>
        </LogoContent>

        <CompanyContent>
          <Description>{data.description}</Description>      
    
          <Pontuation>
            Você tem 200 pts
          </Pontuation>

          <Stats>
            <Button 
              title="Comentários" 
              onPress={ () => alert('Comentários') } 
              color="#666"
            /> 
            <MyShopping data={data} />
          </Stats>

          <List
            keyboardShouldPersistTaps="handled"
            data={prizesData}
            keyExtractor={item => String(item.id)}
            onPress={ () => console.log('clicou')}
            renderItem={({ item }) => (
              <Prizes data={item} />          
            )}
          />
        </CompanyContent>

      </Container>
    )
  }
}

