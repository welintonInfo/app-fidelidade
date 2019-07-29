import React from 'react';
import { StatusBar, View, Text } from 'react-native'
import ReduxThunk, { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';

import '~/config/ReactotronConfig';
import Routes from '~/routes';
import reducers from '~/reducers';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }

  componentDidMount() {
    this.loadAssetsAsync()
  }

  async loadAssetsAsync() {
    this.setState({ fontLoaded: true })
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <>
          <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>

          <Provider store={createStore(reducers, {})}>
            <Routes />
          </Provider>
        </>
      )
    }

    return (
      <View>
        <Text>Carregando</Text>
      </View>
    )
  }
}

export default App;
