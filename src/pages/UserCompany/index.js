import React from 'react';
import { View, Image, Dimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { FloatingAction } from "react-native-floating-action"

import HeaderNavigationBar from '~/components/HeaderNavigationBar'
import UserCompanyInfo from '~/components/UserActions/UserCompanyInfo'
import UserCompanyRedeem from '~/components/UserActions/UserCompanyRedeem'
import UserCompanyComments from '~/components/UserActions/UserCompanyComments'
import Reedem from '~/components/Reedem'
import {
  changeReedemModalVisible,
  verifyVoucher,
  isVoucherValid,
  confirmedVoucher
} from '~/actions/companyActions'


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

const actionButtos = [
  {
    text: "Resgate",
    icon: <Icon name="heart" size={25} />,
    name: "bt_reedem",
    onPress: 'reedem',
    position: 2
  },
  {
    text: "Adicionar Compra",
    icon: <Icon name="cart-plus" size={25} />,
    name: "bt_shopping",
    position: 1
  },
]

class UserCompany extends React.Component { 

  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      routes: [
        { key: 'info', title: 'Info' },
        { key: 'redeem', title: 'Restages' },
        { key: 'comments', title: 'avaliações' },
      ],
      reedem_model_visible: false
    };
  }  

  toogleReedemModal() {
    this.setState({ reedem_model_visible: !this.state.reedem_model_visible })
  }

  handlerOnPressButton = onPress => {
    if ( onPress === 'bt_reedem') {
      this.props.changeReedemModalVisible(true)
    }
  }

  render() {
    return (
      <>
        <HeaderNavigationBar { ...this.props } title={data.name} />       

        <TabView 
          navigationState={this.state}
          renderScene={SceneMap({
            info: () => <UserCompanyInfo { ...this.props } />,
            redeem: () => <UserCompanyRedeem { ...this.props } data={dataListRedeem} />,
            comments: () => <UserCompanyComments { ...this.props } />,
          })}
          onIndexChange={index => {
              this.setState({ index }) 
            }
          }
          initialLayout={{ width: Dimensions.get('window').width }}
        />             

        <FloatingAction     
          actions={actionButtos}
          position="right"
          onPressItem={name => this.handlerOnPressButton(name)}
        /> 

        <Reedem { ...this.props } visible={this.state.reedem_model_visible} />
      </>
    )
  }
}

const mapStateToProps = state => (
  {      
    reedem_model_visible: state.companyReducer.reedem_model_visible,
    reedemLoading: state.companyReducer.reedemLoading,
    validVoucher: state.companyReducer.validVoucher
  }
);

export default connect(
  mapStateToProps,
  {
    changeReedemModalVisible,
    verifyVoucher,
    isVoucherValid,
    confirmedVoucher
  }
)(UserCompany);