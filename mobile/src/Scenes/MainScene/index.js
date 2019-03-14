import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import UsersScene from './UsersScene';
import CompaniesScene from './CompaniesScene';
import UserScene from './UserScene';
import CompanyScene from './CompanyScene';

const HomeScene = createBottomTabNavigator(
  {
    UsersScene,
    CompaniesScene
  },
  {
    initialRouteName: 'UsersScene',
    headerMode: 'screen'
  }
);

export default createStackNavigator(
  {
    HomeScene,
    UserScene,
    CompanyScene
  },
  {
    initialRouteName: 'HomeScene',
    defaultNavigationOptions: {}
  }
);
