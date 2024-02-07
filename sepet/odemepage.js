import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useUserData } from '../UserDataContext';

const OdemeEkrani = () => {
  const navigation = useNavigation();
  const { userData } = useUserData();

  const [kartBilgileri, setKartBilgileri] = useState({
    kartNo: '',
    sonKullanmaTarihi: '',
    cvv: '',
  });

  const [adres, setAdres] = useState('');

  const totalAmount = userData.reduce((acc, item) => acc + item.price, 0);

  const handleOdeme = () => {
    Alert.alert('Ödeme İşlemi', 'Ödeme başarıyla tamamlandı!');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../icons/ccard.png')} style={styles.creditCardIcon} />
      <Text style={styles.title}>Ödeme Ekranı</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Kart Numarası"
          keyboardType="numeric"
          maxLength={16}
          value={kartBilgileri.kartNo}
          onChangeText={(text) => setKartBilgileri({ ...kartBilgileri, kartNo: text })}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Son Kullanma Tarihi (MM/YY)"
          keyboardType="numeric"
          value={kartBilgileri.sonKullanmaTarihi}
          onChangeText={(text) => setKartBilgileri({ ...kartBilgileri, sonKullanmaTarihi: text })}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="CVV"
          keyboardType="numeric"
          secureTextEntry
          value={kartBilgileri.cvv}
          onChangeText={(text) => setKartBilgileri({ ...kartBilgileri, cvv: text })}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adres"
          value={adres}
          onChangeText={(text) => setAdres(text)}
        />
      </View>

      <Text style={styles.totalAmountLabel}>Sepet Toplamı: {totalAmount} ₺</Text>

      <TouchableOpacity style={styles.button} onPress={handleOdeme}>
        <Text style={styles.buttonText}>Ödeme Yap</Text>
      </TouchableOpacity>

      <View style={styles.paymentOptions}>
       

        <TouchableOpacity style={styles.optionButton}>
          <Icon name="truck" size={20} color="#fff" />
          <Text style={styles.optionText}>Kapıda Ödeme</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  creditCardIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    width: '100%',
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    width: '48%',
  },
  optionText: {
    color: '#fff',
    marginLeft: 10,
  },
  totalAmountLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default OdemeEkrani;
