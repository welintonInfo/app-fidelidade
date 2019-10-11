import { createAppContainer, createDrawerNavigator } from 'react-navigation'
import { Dimensions } from 'react-native'

import CustomSidebar from '~/components/CustomSideBar'
import Main from '~/pages/Main'
import Company from '~/pages/Company'
import MyCompanies from '~/pages/MyCompanies'
import UserCompany from '~/pages/UserCompany'
import SignIn from '~/pages/SignIn'

const Routes = createDrawerNavigator(
  { 
    SignIn: { screen: SignIn },
    Main: { screen: Main },
    Company: { screen: Company },
    MyCompanies: { screen: MyCompanies }, 
    UserCompany: { screen: UserCompany }, 
  },
  {
    initialRouteName: 'SignIn',
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomSidebar,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 130,
  }
);

export default createAppContainer(Routes);
