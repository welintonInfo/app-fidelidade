import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import { Container } from './styles'
import { removeItem, getItem } from '~/services/local'
 
export default class CustomSidebar extends Component {
  constructor() {
    super();
    this.proileImage = 'http://www.clker.com/cliparts/b/1/f/a/1195445301811339265dagobert83_female_user_icon.svg.med.png';
    this.items = [
      {
        navOptionIcon: 'home',
        navOptionName: 'Principal',
        screenToNavigate: 'Main',
      },
      {
        navOptionIcon: 'briefcase',
        navOptionName: 'Minha Empresa',
        screenToNavigate: 'UserCompany',
      },
    ];
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  logout = async () => {
    const { navigate } = this.props.navigation
    await removeItem('@api-user:token')
    navigate('SignIn')
  }

  render() {    
    return (
      <Container>
        <ScrollView style={styles.scrollView}>
            {/*Top Large Image */}
            <View style={styles.sideMenuContainer}>
              <Image
                source={{ uri: this.proileImage }}
                style={styles.sideMenuProfileIcon}
              />
              <Text>Rosarinha</Text>
              <Text>Cod: 4956</Text>

              {/*Divider between Top Image and Sidebar Option*/}
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#e2e2e2',
                  marginTop: 15,
                }}
              />

              {/*Setting up Navigation Options from option array using loop*/}
              <View style={{ width: '100%' }}>
                {this.items.map((item, key) => (
                  <View
                    key={key}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingTop: 10,
                      paddingBottom: 10,
                      backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
                    }}>
                    <View style={{ marginRight: 10, marginLeft: 20 }}>
                      <Icon name={item.navOptionIcon} size={25} color="#808080" />
                    </View>
                    <Text
                      style={{
                        fontSize: 15,
                        color: global.currentScreenIndex === key ? '#9b49c1' : 'black',
                      }}
                      onPress={() => {
                        global.currentScreenIndex = key;
                        this.props.navigation.navigate(item.screenToNavigate);
                      }}
                    >
                      {item.navOptionName}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
        </ScrollView>

        <View style={styles.footerContainer}>
          <View style={{ marginRight: 10 }}>
            <Icon name="sign-out-alt" size={25} color="#808080" />
          </View>
          <Text 
            style={{
                fontSize: 15,
              }}
              onPress={() => this.logout()}
            >
              Sair
            </Text>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#fff'
  },
  sideMenuContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 150 / 2,
  },
  footerContainer: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
  },
});