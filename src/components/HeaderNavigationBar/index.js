import React from 'react';
import { Header, Icon } from "react-native-elements";

export default class HeaderNavigationBar extends React.Component {

  iconHamburguerMenu = () => {
    return (
      <Icon
        color="#fff"
        name="menu"
        onPress={() => this.props.navigation.openDrawer()}
      />
    )
  }

  render() {
    return (
      <Header        
        leftComponent={this.iconHamburguerMenu()}
        centerComponent={{
          text: this.props.title,
          style: { color: "#fff", fontWeight: "bold" }
        }}
        statusBarProps={{ barStyle: "light-content", backgroundColor: 'transparent' }}
      />      
    );
  }
}