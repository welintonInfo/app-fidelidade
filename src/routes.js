import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Company from '~/pages/Company';

const Routes = createDrawerNavigator({ 
  Main: { screen: Main },
  Company: { screen: Company } 
});

export default createAppContainer(Routes);
