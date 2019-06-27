import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Company from '~/pages/Company';

const Routes = createAppContainer(
  createStackNavigator({ 
    Main: { screen: Main },
    Company: { screen: Company } 
  }));

export default Routes;
