import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header';
import Slider from '../Components/Slider';
import PlayList from '../Components/PlayList';
import VideoGridList from '../Components/VideoGridList';
const HomeScreen = () => {
  return (
    <View>
      <Header/>
      <Slider/>
      <PlayList/>
      <VideoGridList/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})