import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import Quiz from './screens/Quiz'
import Reslt from './screens/Reslt'
import { NavigationContainer } from '@react-navigation/native'
import MyStack from './Navigation'

const App = () => {
  return (
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})