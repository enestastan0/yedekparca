import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useUserData } from '../UserDataContext';

const PartVendoPage = () => {
  const navigation = useNavigation();
  const {userData, setUserData} = useUserData();
  

  const yedekParcalar = [
    { id: 7, image: require('../parcalar/silecek.png'), title: 'Silecek', price: 260 },
    { id: 8, image: require('../parcalar/panjur.png'), title: 'C Serisi Ön Panjur', price: 1850 },
    { id: 9, image: require('../parcalar/mjant.png'), title: 'Mercedes Jant', price: 28000 },
    { id: 10, image: require('../parcalar/anahtar.png'), title: 'Anahtar', price: 350 },
    { id: 11, image: require('../parcalar/paspas.png'), title: 'Paspas', price: 100 },
    { id: 12, image: require('../parcalar/bugu.png'), title: 'Buğu Önleyici', price: 80 },
    { id: 13, image: require('../parcalar/kılıf.png'), title: 'Direksiyon Kılıfı', price: 295 },
  ];

  const handleEkle = (parca) => {
    // Sepete ekleme işlemleri burada yapılacak
    setUserData([...userData,parca]);
    console.log(userData);
    console.log(`${parca.title} sepete eklendi.`);

    // Basit bir alert kullanarak uyarı göster
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
      <Text style={styles.title}>Parça Pazarı</Text>
      <View style={styles.separator}></View>

      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      <Text style={styles.tel}>
      Telefon: 0(850) 399 7272
      </Text>
      <Text style={styles.parcaDescription}>
      Adres: İstiklal Mah. Piyalepaşa Bulvarı B Blok No:22/1 34440 Beyoğlu / İstanbul

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