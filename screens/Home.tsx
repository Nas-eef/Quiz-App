import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../Components/Title'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title/>
      <View style={styles.bannerContainer}>
        <Image source={{uri:'https://cdni.iconscout.com/illustration/premium/thumb/q-and-a-service-3678714-3098907.png'}} style={styles.banner}/>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Quiz')}>
            <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    banner:{
        height:300,
        width:300
    },
    bannerContainer:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    container:{
      paddingTop:40,
      paddingHorizontal:40,
      height:"100%"
    },
    button:{
      width:'100%',
      backgroundColor:'#0F4C75',
      padding:20,
      borderRadius:16,
      justifyContent:'center',
      alignItems:'center',
      marginBottom:20
    },
    buttonText:{
      color:'white',
      fontSize:24,
    },
})