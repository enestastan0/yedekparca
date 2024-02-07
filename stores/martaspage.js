import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useUserData } from '../UserDataContext';

const PartVendoPage = () => {
  const navigation = useNavigation();
  const {userData, setUserData} = useUserData();

  const yedekParcalar = [
    { id: 1, image: require('../parcalar/jant.png'), title: 'Jant', price: 17500 },
    { id: 2, image: require('../parcalar/direksiyon.png'), title: 'Direksiyon', price: 9480 },
    { id: 3, image: require('../parcalar/anahtar.png'), title: 'Anahtar', price: 300 },
    { id: 4, image: require('../parcalar/emniyetkemeri.png'), title: 'Emniyet Kemeri', price: 210 },
    { id: 5, image: require('../parcalar/paspas.png'), title: 'Paspas', price: 85 },
    { id: 6, image: require('../parcalar/koldayama.png'), title: 'Kol Dayama', price: 1590 },
  ];

  const handleEkle = (parca) => {
    setUserData([...userData,parca]);
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
      <Text style={styles.title}>Martaş Otomotiv</Text>
      <View style={styles.separator}></View>

      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      <Text style={styles.tel}>
      Telefon: (0216) 561 03 03
      </Text>
      <Text style={styles.parcaDescription}>
      Adres: Yenidoğan, Girne Bulvarı No:247 A/G, H Blok, 01316 Yüreğir/Adana

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