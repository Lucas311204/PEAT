import React, { useEffect, useState } from 'react';
import {View,
   KeyboardAvoidingView,
    Image,
     TextInput,
      TouchableOpacity,
       Text,
        StyleSheet,
      Animated,
      Keyboard
    } from 'react-native';


 
export default function App() {
  const [offset] = useState(new Animated.ValueXY({x0, y: 95}))
  const [opacity] = useState( new Animated.Value(0))
  const [Logo] = useState(new Animated.ValueXY({x0: 130, y: 155}))  
  useEffect(()=> {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20
      }),
      Animated.timing(opacity, {
        toValue:1,
        duration: 500
      })
    ]).start();

  }, []);

  function keyboardDidShow(){



    Animated.parallel([

      Animated.timing(logo.x, {

        toValue:55,

        duration: 500,

      }),

      Animated.timing(logo.y, {

        toValue:65,

        duration:100,

      }),

    ]).start();

  }



  function keyboardDidHide(){



    Animated.parallel([

      Animated.timing(logo.x, {

        toValue:130,

        duration: 500,

      }),

      Animated.timing(logo.y, {

        toValue:155,

        duration:100,

      }),

    ]).start();

  }


  export default function SignIn() {
  return (

    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image style={{
          width: Logo.x,
          height:Logo.y

        }}
        source={require('./src/assets')}
        />
      </View>

      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [
              {translateY:offset.y }
            ]
          }
        ]}
        ></Animated.View>

    <View style={container}>
      <TextInput>
        placeholder="Email"
        autoCorrect={false}
        onChangeText={()=> {}}
      </TextInput>

      <TextInput>
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={()=> {}}
      </TextInput>

      <TouchableOpacity style={styles.btnSubmit}>
        <Text style={styles.submitText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnRegister}>
        <Text style={styles.registerText}>Criar Conta Gratuita</Text>
      </TouchableOpacity>
    </View>




    </KeyboardAvoidingView>

  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919'
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom:15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },
  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,    
  },
  submitText: {
    color: '#FFF',
    fontSize:18
  },
  btnRegister: {
    marginTop: 10
    },
    registerText:{
      color: '#FFF'
    }
});