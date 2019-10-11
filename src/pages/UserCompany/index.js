import React from 'react';
import { Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { FloatingButton, PillView } from '@99xt/first-born'

import HeaderNavigationBar from '~/components/HeaderNavigationBar'
import UserCompanyInfo from '~/components/User/UserCompanyInfo'
import UserCompanyRedeem from '~/components/User/UserCompanyRedeem'
import UserCompanyComments from '~/components/User/UserCompanyComments'
import UserPrizeModal from '~/components/User/UserPrizeModal'
import Reedem from '~/components/Reedem'
import {
  changeReedemModalVisible,
  verifyVoucher,
  isVoucherValid,
  confirmedVoucher,
  takeReedem
} from '~/actions/companyActions'


const dimensions = Dimensions.get('window')
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

const pillScenes = [
  { scene: <UserCompanyInfo  /> },
  { scene: <UserCompanyRedeem data={dataListRedeem} /> },
  { scene: <UserCompanyComments /> },
];

const pillHeaders = [
  { title: 'Info', icon: "home" },
  { title: 'Resgates', icon: "card" },
  { title: 'Avaliações', icon: "list" },
];

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
      reedem_model_visible: false,    
      actionButtos: []  
    };
  }  

  componentDidMount() {
    const actionButtos =  [
      {
        text: "Resgate",
        icon: "heart",
        name: "bt_reedem",      
        position: 1,
        onPress: () => this.props.changeReedemModalVisible(true)
      },
      {
        text: "Adicionar Compra",
        icon:"cart",
        name: "bt_shopping",
        position: 2,
        onPress: () => alert('include shooping')        
      },
      {
        text: "Novo Prêmio",
        icon:"award",
        name: "bt_new_prize",
        position: 3,
        onPress: () => alert('Adicionar PRize')        
      },
    ]

    this.setState({ actionButtos })
  }

  toogleReedemModal = () => {
    this.setState({ reedem_model_visible: !this.state.reedem_model_visible })
  }

  handlerOnPressButton = onPress => {
    if ( onPress === 'bt_reedem') {
      this.toogleReedemModal()
    }
  }

  render() {
    return (
      <>
        <HeaderNavigationBar { ...this.props } title={data.name} />       

        <PillView      
          pillHeaders={pillHeaders} 
          pillScenes={pillScenes} 
        />

        <FloatingButton  
          ref={(ref) => { this.floatingAction = ref }}   
          actions={this.state.actionButtos}
        /> 

        <Reedem {...this.props} />
        <UserPrizeModal {...this.props} />
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
    confirmedVoucher,
    takeReedem
  }
)(UserCompany);