import React from 'react';
import { Image, Dimensions } from 'react-native'

import { 
  Container, 
  Name, 
  List, 
  Description, 
  LogoContent, 
  LogoContentTitle, 
  CompanyContent 
} from './styles'
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

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

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
        <LogoContent>
          <Image
            style={{ 
              width: imageWidth, height: 200, alignItems: 'center',
              justifyContent: 'center'
            }}
            source={{
              uri:
                'https://loremflickr.com/800/300',
            }}
          />
          <LogoContentTitle>
            <Name>{data.name}</Name>
          </LogoContentTitle>
        </LogoContent>

        <CompanyContent>
          <Description>{data.description}</Description>      
    
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

