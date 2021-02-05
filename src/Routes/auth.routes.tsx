import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SigIn from '../pages/Sigin';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SigIn" component={SigIn} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
