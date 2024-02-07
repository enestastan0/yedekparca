import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

export default function RegisterScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const handleRegister = async () => {
      //navigation.navigate('Anasayfa');
      const data = {
        email: email,
        password: password,
        name:name,
      };
      const response = await axios.post("http://10.0.2.2:8000/api/register", data);
      console.log(response.data.message);
      if(response.data.message == "Ok"){
        navigation.navigate('Login' );
        console.log("Okey");
      }
      else{
        Alert.alert("Yanlış Bilgi");
      }
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Kayıt Ol</Text>
        <View style={styles.line}></View>
      </View>
      
      <View style={styles.iconContainer}>
        <Icon name="address-book" size={75} color="black" />
      </View>
      
      <Text style={styles.label}>Ad Soyad</Text>
      <TextInput
        style={styles.input}
        placeholder="Adınızı ve soyadınızı girin"
        autoCapitalize="none"
        value={name}
        onChangeText={text => setName(text)}
      />
      
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail adresinizi girin"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      

      
      <Text style={styles.label}>Şifre</Text>
      <TextInput
        style={styles.input}
        placeholder="Şifrenizi girin"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 0,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  line: {
    width: '80%',
    height: 1,
    backgroundColor: 'black',
  },
  iconContainer: {
    marginBottom: 30,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    fontSize: 18,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 12,
    borderWidth: 2.5,
    backgroundColor: '#efe5ef',
    borderColor: 'black',
    borderRadius: 45,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});