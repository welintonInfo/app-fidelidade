import React from 'react';
import { View, Image, Dimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view';

import { 
  Content, 
  LogoContent, 
  CompanyContent,
} from './styles'
import HeaderNavigationBar from '~/components/HeaderNavigationBar'
import UserCompanyInfo from '~/components/UserCompanyInfo'
import UserCompanyRedeem from '~/components/UserCompanyRedeem'
import UserCompanyComments from '~/components/UserCompanyComments'


const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

const data = {
  name: "Lanchonete come bem",

}

const dataListRedeem = [
  {
    id: 1,
    name: 'José Figueiredo',
    date: '20/05/2019',
    prize: 'Hamburguer + refri',
    pontuation: 250
  },
  {
    id: 2,
    name: 'Maria Joaquina',
    date: '19/05/2019',
    prize: 'Mate-cola + bombom',
    pontuation: 200
  },
  {
    id: 3,
    name: 'Manoel Dr',
    date: '15/05/2019',
    prize: 'Hamburguer + refri',
    pontuation: 250
  },
  {
    id: 4,
    name: 'José Figueiredo',
    date: '20/05/2019',
    prize: 'Hamburguer + refri',
    pontuation: 250
  },
  {
    id: 5,
    name: 'Maria Joaquina',
    date: '19/05/2019',
    prize: 'Mate-cola + bombom',
    pontuation: 200
  },
  {
    id: 6,
    name: 'Manoel Dr',
    date: '15/05/2019',
    prize: 'Hamburguer + refri',
    pontuation: 250
  }
]

export default class MyCompanies extends React.Component {  

  state = {
    index: 0,
    routes: [
      { key: 'info', title: 'Info' },
      { key: 'redeem', title: 'Restages' },
      { key: 'comments', title: 'avaliações' },
    ],
  };

  constructor(props) {
    super(props)
  }  

  render() {
    return (
      <>
        <HeaderNavigationBar { ...this.props } title={data.name} />       

        <TabView          
          lazy={true}
          timingConfig="0"
          navigationState={this.state}
          renderScene={SceneMap({
            info: () => <UserCompanyInfo { ...this.props } />,
            redeem: () => <UserCompanyRedeem { ...this.props } data={dataListRedeem} />,
            comments: () => <UserCompanyComments { ...this.props } />,
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />         

      </>
    )
  }
}

