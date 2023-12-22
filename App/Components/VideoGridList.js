import { FlatList, StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import React from 'react';
import Colors from '../Shared/Colors';

const VideoGridList = () => {
    const VideoList=[
        {
            id:1,
            name:'Make Video Using ChatGPT',
            imageUrl:'https://i.ytimg.com/vi/N7xEs9E9Y4A/maxresdefault.jpg',
            url:'N7xEs9E9Y4A'
        },
        {
            id:2,
            name:'10 Skills AI made useless',
            imageUrl:'https://i.ytimg.com/vi/EgEW5KP6I2A/maxresdefault.jpg',
            url:'N7xEs9E9Y4A'

        },
        {
            id:3,
            name:'UI Design Tutorial',
            imageUrl:'https://i.ytimg.com/vi/P1_ciTwn6fE/maxresdefault.jpg',
            url:'P1_ciTwn6fE'
        }
    ]

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular Videos</Text>
      <FlatList
      data={VideoList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>
    <View>
        <Image source={{uri:item.imageUrl}} style={styles.image}/>
        <Text style={styles.nametext}>{item.name}</Text>
    </View>
    }
      />
    </View>
  )
}

export default VideoGridList

const styles = StyleSheet.create({
    container:{
        marginTop:15
    },
    heading:{
        fontSize:20,
        color:'#fff',
        fontWeight:'bold',
        marginBottom:10,

        
    },
    image:{
        width:Dimensions.get('screen').width*0.5,
        height:100,
        margin:5,
        borderRadius:7,

    },
    nametext:{
        color:Colors.white,
        marginBottom:10,
        fontSize:10,
    

    }
})