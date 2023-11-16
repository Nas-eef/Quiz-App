import { Image ,StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Reslt = ({navigation, route}) => {
  const {score} = route.params;
  return (
    <View style={styles.Maincontainer}>
        <View style={styles.container}>
            <Text style={styles.title}>Results</Text>
            <Text style={styles.title}>Your score is {score}</Text>
        </View>
        <View style={styles.bannerContainer}>
        <Image source={{uri:'https://cdni.iconscout.com/illustration/premium/thumb/q-and-a-service-3678714-3098907.png'}} style={styles.banner}/>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Go Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Reslt

const styles = StyleSheet.create({
    banner:{
        height:300,
        width:300
    },
    bannerContainer:{
        justifyContent:'center',
        alignItems:'center'
    } ,
    title:{
      fontSize:36,
      color:'black',
      fontWeight:'600'
    },
    container:{
      paddingVertical:16,
      justifyContent:'center',
      alignItems:'center'
    },
    Maincontainer:{
      paddingTop:0,
      paddingHorizontal:40,
      height:"100%",
      justifyContent:'space-evenly'
    },
    button:{
      width:'100%',
      backgroundColor:'#0F4C75',
      padding:20,
      borderRadius:16,
      justifyContent:'center',
      alignItems:'center',
    },
    buttonText:{
      color:'white',
      fontSize:24,
    },
})