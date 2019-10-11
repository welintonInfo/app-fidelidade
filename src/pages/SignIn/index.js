import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar, AsyncStorage, Text, Button, ActivityIndicator } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import api from '../../services/api';
import { getItem, setItem } from '../../services/local'

import {
  Container,
  Logo,
  Input
} from './styles';

export default class SignIn extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: 'admin@admin.com',
      password: 'admin',
      error: '',
      loading: false
    }
  }  

  async componentWillMount() {
    const { navigate } = this.props.navigation
    const userLogged = await getItem('@api-user:token')
    console.log('userLogged')
    console.log(userLogged)
    if (userLogged) 
      navigate('Main')
  }

  handleEmailChange = (email) => {
    this.setState({ email });
  };
  
  handlePasswordChange = (password) => {
    this.setState({ password });
  };
  
  handleCreateAccountPress = () => {
    const { navigate } = this.props.navigation
    navigate('Main')
  };

  loadingButton = () => {
    if (this.state.loading) {
      return (
        <ActivityIndicator size="small" color="#00ff00" />
      )
    }

    return (
      <Button 
          onPress={this.handleSignInPress}
          title="Login"        
        /> 
    )
  }

  handleSignInPress = async () => {
    this.setState({ loading: true, error: '' })

    const { navigate } = this.props.navigation
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      this.setState({ error: 'Preencha usuário e senha para continuar!' , loading: false });
    } else {
      
      try {
        const response = await api.post('/signin', {
          email: this.state.email,
          password: this.state.password,
        });
        
        // await setItem('@api-user:token', response.data.token);
        // await setItem('@api-user:data', response.data.user);
        this.setState({ loading: false })
        navigate('Main')
      } catch (_err) {
        console.log(_err)
        this.setState({ error: 'Houve um problema com o login, verifique suas credenciais!', loading: false });
      }
    }
  };

  render() {
    return (
      <Container>     
        <Input
          placeholder="Seu e-mail"
          value={this.state.email}
          onChangeText={this.handleEmailChange}
        />
        <Input
          placeholder="Senha"
          value={this.state.password}
          onChangeText={this.handlePasswordChange}
          secureTextEntry
        />

        <Text>{ this.state.error }</Text>               

        { this.loadingButton() }
      </Container>
    );
  }
}