import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUserData } from '../UserDataContext';
import Icon from 'react-native-vector-icons/FontAwesome'; // Sepet ikonu için

const Anasayfa = () => {
  const navigation = useNavigation();
  const { userData, setUserData } = useUserData();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AKSESUAR MAĞAZALARI</Text>

      <View style={styles.gridContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('MartasPage')} style={styles.logo}>
          <Image source={require('../dukkan/martas.png')} style={styles.imageBorder} />
          <Text style={styles.logoText}>MARTAŞ OTOMOTİV</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ParcaPazarıPage')} style={styles.logo1}>
          <Image source={require('../dukkan/parcapazarı.png')} style={styles.imageBorder} />
          <Text style={styles.logoText}>PARÇA PAZARI</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gridContainer}>
        <Text style={styles.title1}>MOTOR PARÇA MAĞAZALARI</Text>
        <TouchableOpacity onPress={() => navigation.navigate('PartVendoPage')} style={styles.logo}>
          <Image source={require('../dukkan/partvendo.png')} style={styles.imageBorder} />
          <Text style={styles.logoText}>PARTVENDO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('OtoParcasanPage')} style={styles.logo1}>
          <Image source={require('../dukkan/otoparcasan.jpg')} style={styles.imageBorder} />
          <Text style={styles.logoText}>OTO PARÇASAN</Text>
        </TouchableOpacity>
      </View>

      {/* Sepet İkonu */}
      <TouchableOpacity onPress={() => navigation.navigate('Sepet')} style={styles.basketIcon}>
        <Icon name="shopping-basket" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    marginTop: 20,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  title1: {
    fontSize: 24,
    marginBottom: 30,
    marginTop: 70,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginLeft: 50,
    
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  logo: {
    width: '47%',
    aspectRatio: 1,
    backgroundColor: 'transparent',
    marginBottom: '5%',
    marginLeft: 6,
  },
  logo1: {
    width: '47%',
    aspectRatio: 1,
    backgroundColor: 'transparent',
    marginBottom: '5%',
    marginRight: 6,
  },
  imageBorder: {
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 20,
    width: '100%',
    height: '100%',
  },
  logoText: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },

  basketIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 50,
  },
});

export default Anasayfa;
