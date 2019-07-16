import React from 'react';
import { Text, BackHandler } from 'react-native'

import { 
  Container, 
  List, 
  CompanyContent,
} from './styles'
import UserCompany from '~/components/UserCompany'
import HeaderNavigationBar from '~/components/HeaderNavigationBar'

export default class MyCompanies extends React.Component {  
  constructor(props) {
    super(props)
  }
 
  render() {
    const { data } = this.props.navigation.state.params
    return (
      <Container>
        <HeaderNavigationBar { ...this.props } title={data.name} />

        <CompanyContent>         
         <Text>Empresa {data.name}</Text>
        </CompanyContent>

      </Container>
    )
  }
}

