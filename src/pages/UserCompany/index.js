import React from 'react';
import { View, Image, Dimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view';

import { 
  Container, 
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
        <LogoContent>
          <Image
            style={{ 
              width: imageWidth, height: 150, alignItems: 'center',
              justifyContent: 'center'
            }}
            source={{
              uri: 'https://picsum.photos/id/950/800/300',
            }}
          />
        </LogoContent>

        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            info: () => <UserCompanyInfo { ...this.props } />,
            redeem: () => <UserCompanyRedeem { ...this.props } />,
            comments: () => <UserCompanyComments { ...this.props } />,
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />

      </>
    )
  }
}

