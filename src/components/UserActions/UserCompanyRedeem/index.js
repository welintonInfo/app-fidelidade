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
    // this.loadRepositories();
  }

  componentWillUnmount(){
    this.setState({ loading: false });
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

  render() {
    return (
      <Container>        
        <List
          keyboardShouldPersistTaps="handled"
          data={this.props.data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            this.renderListItem(item)
          )}
          onEndReached={this.loadRepositories}
          onEndReachedThreshold={0.1}
        />
      </Container>
    )
  }
}
