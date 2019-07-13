import React from 'react';
import { StatusBar } from 'react-native'

import '~/config/ReactotronConfig';
import Routes from '~/routes';


const App = () => (
  <>
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
    <Routes />
  </>
)

export default App;
