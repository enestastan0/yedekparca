import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native'; // LottieView ekleyin
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [animationState, setAnimationState] = useState(null); 

  const handleLogin = async () => {
          //navigation.navigate('Anasayfa');
          const data = {
            email: email,
            password: password,
          };
          const response = await axios.post("http://10.0.2.2:8000/api/login", data);
          console.log(response.data.message);
          if(response.data.message == "Ok"){
            navigation.navigate('Anasayfa');
          }
          else{
            Alert.alert("Girmiş Olduğunuz Bilgiler Eksik veya Hatalıdır.");
          }
   
  };

  const handleForgotPassword = () => {
    
    Alert.alert('Şifremi Unuttum', 'Şifrenizi sıfırlamak için e-posta gönderildi.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Son Parça</Text>
        <View style={styles.line}></View>
      </View>

      <LottieView
        source={require('../animasyon/truck-delivery-service.json')} 
        autoPlay={false}
        loop={false}
        resizeMode="cover"
        style={{ width: 200, height: 200, marginBottom: 20 }}
        onAnimationFinish={() => setAnimationState(null)} 
        progress={animationState === 'success' ? 1 : animationState === 'error' ? 0.5 : 0} 
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

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Şifremi Unuttum</Text>
      </TouchableOpacity>

      
    </View>
  );
};

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
    marginBottom: 10,
    marginTop: 60,
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
    fontSize: 20,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 15,
    width: '48%', 
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 30,
  },
  button1: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 15,
    width: '48%', // İki butonu yan yana sığdırmak için genişliği düzenledim
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },

  forgotPasswordText: {
    marginTop: 15,
    textDecorationLine: 'underline',
    fontSize: 16,
    color: 'blue',
  },
});

export default LoginScreen;
