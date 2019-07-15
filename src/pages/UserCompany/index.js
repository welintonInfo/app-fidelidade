import React from 'react';
import { Image, Dimensions, Text, Button } from 'react-native'

import { 
  Container, 
  List, 
  CompanyContent,
} from './styles'
import UserCompany from '~/components/UserCompany'
import HeaderNavigationBar from '~/components/HeaderNavigationBar'

const companiesData = [
  {
    id: 1,
    name: 'Lanchonete Come bem',
    description: 'Descricao do Lanchonete Come bem',
    pontuation: 250
  },
  {
    id: 2,
    name: 'Barbeiro Jamerson Dial',
    description: 'Descricao do Lanchonete Come bem',
    pontuation: 200
  },
]

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

export default class MyCompanies extends React.Component {  
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Container>
        <HeaderNavigationBar { ...this.props } title="" />

        <CompanyContent>         
          <List
            keyboardShouldPersistTaps="handled"
            data={companiesData}
            keyExtractor={item => String(item.id)}
            onPress={ () => console.log('clicou')}
            renderItem={({ item }) => (
              <UserCompany data={item} pontuation={200}/>          
            )}
          />
        </CompanyContent>

      </Container>
    )
  }
}

