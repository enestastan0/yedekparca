import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useUserData } from '../UserDataContext';

const PartVendoPage = () => {
  const navigation = useNavigation();
  const {userData, setUserData} = useUserData();
  

  const yedekParcalar = [
    { id: 14, image: require('../parcalar/aku.png'), title: 'Akü', price: 490 },
    { id: 15, image: require('../parcalar/motor.png'), title: 'Motor', price: 29000 },
    { id: 16, image: require('../parcalar/sanzıman.png'), title: 'Şanzıman', price: 14500 },
    { id: 17, image: require('../parcalar/direksiyonsistemi.png'), title: 'Direksiyon Sistemi', price: 9700 },
    { id: 18, image: require('../parcalar/teker.png'), title: 'Tekerlek', price: 2000 },
    { id: 19, image: require('../parcalar/sisfarı.png'), title: 'Sis Farı', price: 460 },
    { id: 20, image: require('../parcalar/yakıtfiltresi.png'), title: 'Yakıt Filtresi', price: 600 },
  ];

  const handleEkle = (parca) => {
    
    setUserData([...userData,parca]);
    console.log(userData);
    console.log(`${parca.title} sepete eklendi.`);

    
    Alert.alert(
      'Başarılı',
      `${parca.title} sepete eklendi.`,
      [
        { text: 'Tamam', onPress: () => console.log('Tamam Pressed') }
      ],
      { cancelable: false }
    );
  };
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>PartVendo Yedek Parça</Text>
      <View style={styles.separator}></View>

      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      <Text style={styles.tel}>
      Telefon: (0212) 548 04 44
      </Text>
      <Text style={styles.parcaDescription}>
      Adres: İkitelli Organize Sanayi Bölgesi, Aykosan Sanayi Sitesi, 2. Kısım No: 17/C, Blok, 34490 Başakşehir/İstanbul

      </Text>
      
      </TouchableOpacity>

      <TouchableOpacity style={styles.cartIconContainer} onPress={() => navigation.navigate('Sepet')}>
        <Icon name="shopping-cart" size={30} color="#333" />
      </TouchableOpacity>

      <Text style={styles.subtitle}>Yedek Parçalar</Text>
      <View style={styles.separator}></View>

      {yedekParcalar.map((parca) => (
        <View key={parca.id} style={styles.parcaContainer}>
          <View style={styles.parcaItem}>
            <Image source={parca.image} style={styles.parcaImage} resizeMode="contain" />
            <View style={styles.parcaInfo}>
              <Text style={styles.parcaTitle}>{parca.title}</Text>
              <Text style={styles.parcaPrice}>{parca.price} ₺</Text>
            </View>
            <TouchableOpacity style={styles.ekleButton} onPress={() => handleEkle(parca)}>
              <Text style={styles.ekleButtonText}>Ekle</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  separator: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  parcaContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  parcaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  parcaImage: {
    width: '30%',
    height: 100,
    marginRight: 10,
    borderRadius: 20,
  },
  parcaInfo: {
    flex: 1,
  },
  parcaTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  parcaPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ekleButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
  },
  ekleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  parcaDescription: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 22,
  },
  cartIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  tel:{
    fontWeight: 'bold',
  },
});

export default PartVendoPage;