import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe'

const YTPlayer = () => {
  return (
    <View style={styles.webviewContainer}>
       <YoutubePlayer
        height={300}
        play={playing}
        videoId={"iee2TATGMyI"}
        onChangeState={onStateChange}
      />
    </View>
  )
}

export default YTPlayer

const styles = StyleSheet.create({})