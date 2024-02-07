import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Anasayfa from './screens/Anasayfa';
import MartasPage from './stores/martaspage';
import ParcaPazarı from './stores/parcapazaripage';
import PartVendoPage from './stores/partvendopage';
import OtoParcasan from './stores/otoparcasanpage';
import Sepet from './sepet/sepet';
import OdemePage from './sepet/odemepage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ title: 'Kayıt Ol' }} 
        />
      
      <Stack.Screen 
          name="Anasayfa" 
          component={Anasayfa} 
          options={{ title: 'Anasayfa' }} 
        />
        <Stack.Screen 
          name="MartasPage" 
          component={MartasPage} 
          options={{ title: 'Martaş Yedek Parça' }} 
        />
        <Stack.Screen 
          name="ParcaPazarıPage" 
          component={ParcaPazarı} 
          options={{ title: 'Parça Pazarı Sayfası' }} 
        />
        <Stack.Screen
        name="PartVendoPage"
        component={PartVendoPage}
        options={{title: 'Part Vendo Sayfası'}}
        />
        <Stack.Screen 
          name="OtoParcasanPage" 
          component={OtoParcasan} 
          options={{ title: 'Oto Parçasan Sayfası' }} 
        />
        <Stack.Screen 
          name="Sepet" 
          component={Sepet}  // Sepet sayfasını tanımladık
          options={{ title: 'Sepetim' }} 
        />
        <Stack.Screen 
          name="OdemePage" 
          component={OdemePage}  // Sepet sayfasını tanımladık
          options={{ title: 'Ödeme Sayfası' }} 
        />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
