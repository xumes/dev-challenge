import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SplashScene from './SplashScene';
import MainScene from './MainScene';

export default createAppContainer(
  createSwitchNavigator(
    {
      MainScene,
      SplashScene
    },
    {
      initialRouteName: 'SplashScene'
    }
  )
);
