import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import Input from '../../components/inputs';
import  { AntDesign } from '@expo/vector-icons'; 

export default function SignUp() {

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={ () => navigation.navigate('Welcome')}>
      <AntDesign style={styles.iconBack}  name="left" size={26} color='white' />
      </TouchableOpacity>
     <View style={styles.header}>
     <Image
                source={require('../../assets/PEAT.png')}
                style={{ width: '100%' }}
                resizeMode="contain"
                />
     </View>
     <Animatable.View animation='fadeInUp' style={styles.Content}>
     <Input iconName={"user"} placeholder="Nome de Usuario" />
     <Input iconName={"envelope"} keyboardType="email-address" placeholder="Email" />
     <Input iconName={"lock"} secureTextEntry placeholder="Senha"/>

     <View style={styles.btn}>
     <TouchableOpacity style={styles.btnSignUp}>
      <Text style={styles.txtSignUp}>
      Cadastrar
      </Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btnSignIn} onPress={()=>navigation.navigate('SignIn')}>
      <Text style={styles.txtSignIn}>
      Já possuo uma conta!
      </Text >
     </TouchableOpacity>
     </View>
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

  header:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
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
    
  },

  btn:{
    flex: 1,
    alignItems: 'center',
  },

  btnSignUp:{
    backgroundColor: "#38a69d",
    marginBottom: '5%',
    borderRadius: 20,
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: "1%",
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtSignUp:{
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  txtSignIn:{
    fontSize: 15,
    fontWeight: '600'
  }
})