import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground
} from "react-native";
import React from "react";
import  Ionicons  from 'react-native-vector-icons/Ionicons';

const Register = ({ navigation }) => {
  return (
    <View style={styles.loginContainer}>
            <ImageBackground 
                // source={{uri: 'https://media.istockphoto.com/vectors/hitech-circuit-style-round-yggdrasil-tree-cyberpunk-futuristic-design-vector-id951268172'}}
                resizeMode='cover'
                style={styles.bgContainer}

            >
                <View style={styles.logoLogin}>
                <Image style={styles.logoImg} source={require('../assets/images/logo-book-shop.jpg')}/>
                </View>
                <Text style={styles.signinText}>    
                    Đăng ký
                </Text>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Username' style={styles.inputText}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Email' style={styles.inputText}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Mật khẩu' style={styles.inputText}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Xác nhận mật khẩu' style={styles.inputText}/>
                    </View>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.btnTxt} >Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#EEEEEE',
},
logoLogin: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    // backgroundColor: '#d81b60',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
}, 
signinText: {
    color: '#d81b60',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 10,
    color: '#000',

},
formContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
},
inputContainer: {
    width: '70%',
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
},
inputText: {
    // borderBottomWidth: 3,
    // borderBottomColor: '#d81b60',
    border: 'solid',
    paddingVertical:10,
    color: '#000',
    borderRadius: 10,
    paddingLeft: 10,
},
btn: {
    backgroundColor: '#3AB0FF',
    width: '70%',
    height: 45,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 10,
    marginTop: 20,
},
btnTxt: {
    color: '#FFF'
},
bgContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
txtForgot : {
    marginTop: 20,
    marginLeft: 100,
    color: 'white',
    fontStyle: 'Underline'
},
logoImg: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor: '#d81b60',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 40,
},
});
