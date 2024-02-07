import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useUserData } from '../UserDataContext';

const Sepet = () => {
  const navigation = useNavigation();
  const {userData, setUserData} = useUserData();

  // Örnek ürünler listesi
  const cartItems = userData;

  // Toplam fiyat hesaplama
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  // Ürünü sepetten kaldır
  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setUserData(updatedCart);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sepetim</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.title}</Text>
            <Text style={styles.itemPrice}>{item.price} ₺</Text>
            <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeItemButton}>
              <Icon name="trash" size={20} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Toplam: {totalAmount} ₺</Text>
        <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate('OdemePage')}>
          <Text style={styles.checkoutText}>Sepeti Onayla</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },

  removeItemButton: {
    marginLeft: 10,
  },
});

export default Sepet;