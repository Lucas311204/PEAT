import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import Input from '../../components/inputs';
import  { AntDesign } from '@expo/vector-icons'; 

export default function SignIn() {

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={ () => navigation.navigate('Welcome')}>
      <AntDesign style={styles.iconBack}  name="left" size={26} color='white' />
      </TouchableOpacity>
     <View style={styles.header}>

     <View style={styles.image}>
        <Image
        source={require('../../assets/gato.png')}
        style={{ width: "40%"}}
        resizeMode="contain"
        />

      </View>
      <Image
                source={require('../../assets/PEAT.png')}
                style={{ width: '100%' }}
                resizeMode="contain"
                />
                     </View>
     <Animatable.View animation='fadeInUp' style={styles.Content}>
     <Input iconName={"envelope"} keyboardType='email-address' placeholder='Email' />
     <Input iconName={"lock"} secureTextEntry placeholder='Senha'/>

     <TouchableOpacity style={styles.btnSignIn}>
      <Text style={styles.txtSignIn}>
      Entrar
      </Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btnSignUp} onPress={()=> navigation.navigate("SignUp")}>
      <Text style={styles.txtSignUp}>
      Não tem conta ainda? Cadastre-se!
      </Text>
     </TouchableOpacity>
     </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#38a69d",
  },

  iconBack:{

    padding: "5%",
  },
image:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#38a69d",
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
  },
  header:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "25%",
    marginBottom: '15%',
    flex: 1,
  },

  txtHeader:{
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 45,
  },

  txtAny:{
    color: "#a1a1a1",
  },

  Content:{
    flex: 2,
    alignItems: 'center',
    backgroundColor: "#fff",
    paddingTop: 25,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 10,
    marginTop: 50,
    
  },

  btnSignIn:{
    backgroundColor: "#38a69d",
    marginBottom: '5%',
    borderRadius: 40,
    paddingLeft: 45,
    paddingRight: 45,
    marginTop: "5%",
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtSignIn:{
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold'
  },

  txtSignUp:{
    color: "#a1a1a1",
    fontSize: 15,
    fontWeight: '400'
  }
})