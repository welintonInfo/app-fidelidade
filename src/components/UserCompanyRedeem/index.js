import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button, Input } from 'react-native-elements'

import { Container, List, Stats, ContentList, Name, ModalContent, ModalTitle, ModalCloseButton } from './styles'

const searchTerm = 'react';
const perPage = 20;

export default class UserCompanyRedeem extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      isModalVisible: false,
      loading: false,
      validVoucher: false,
      message: '',
      page: 1,
      data: [],
    }
  }

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    if (this.state.loading) return;

    const { page } = this.state;

    this.setState({ loading: true });

    const response = await fetch(`https://api.github.com/search/repositories?q=${searchTerm}&per_page=${perPage}&page=${page}`);
    const repositories = await response.json();

    this.setState({
      data: [ ...this.state.data, ...repositories.items ],
      page: page + 1,
      loading: false,
    });
  }

  renderListItem = (item) => (
    <ContentList>    
      <Stats>
        <Name>{ item.name }</Name>
        <Text>{ item.date }</Text>
      </Stats>
      <Stats>
        <Text>{ item.prize }</Text>
        <Text>{ item.pontuation } pts</Text>
      </Stats>
    </ContentList>
  )

  toggleOnPress = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }

  renderModal(isVisible = false) {    
    return (
      <Modal 
        isVisible={this.state.isModalVisible}
        animationIn="slideInLeft"
        animationOut="slideOutRight"
      >
        <ModalContent>

          <View style={{ position: 'absolute', top: 5, right: 5 }}>
            <ModalCloseButton 
              onPress={() => this.toggleOnPress()}                                        
            >
              <Text>X</Text>
            </ModalCloseButton>
          </View>

          <ModalTitle>Insira o voucher</ModalTitle>

          <Input
            inputStyle={{}}
            placeholder="Voucher"            
            leftIcon={
              <Icon
                name='ticket'
                size={24}
                color='#808080'
              />
            }
          />
          { this.renderModalButton() }
        </ModalContent>
      </Modal>
    )
  }

  renderModalButton = () => {
    if ( this.state.loading ) {
      return (
        <ActivityIndicator size="small" color="#00ff00" />
      )
    }

    if (this.state.validVoucher) {
      return (
        <>
          <Text>Voucher is valid</Text>
          <Button
            title="Confirmar"
            color=""
            onPress={() => this.confirmVoucher() }
          />
        </>
      )
    }

    return (
      <Button
        title="Verificar"
        color=""
        onPress={() => this.generatePrizeVoucher() }
      />
    )
  }  

  generatePrizeVoucher = async () => {    
    this.setState({ loading: true }) 
    let promise = await this.sendVoucherRequest() 
    this.setState({ loading: false, validVoucher: true }) 
  }
  
  sendVoucherRequest = () => {
    return new Promise(function(resolve) {
      setTimeout(resolve, 2000);
    })
  }

  confirmVoucher = async () => {
    this.setState({ loading: true }) 
    await this.sendVoucherRequest() 
    this.setState({ 
      validVoucher: false, 
      isModalVisible: false, 
      loading: false,
      message: 'Entrega da premiação registrada', 
    })
    await this.sendVoucherRequest()
    this.setState({
      message: '', 
    })
  }

  renderMessage = () => {
    return (
      <Text>{this.state.message}</Text>
    )
  }

  render() {
    return (
      <Container>
        <Button 
          title="Registrar"  
          onPress={ () => this.toggleOnPress() }
        />
        { this.renderMessage() }
        <List
          keyboardShouldPersistTaps="handled"
          data={this.state.data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            this.renderListItem(item)
          )}
          onEndReached={this.loadRepositories}
          onEndReachedThreshold={0.1}
        />
        { this.renderModal() }
      </Container>
    )
  }
}
